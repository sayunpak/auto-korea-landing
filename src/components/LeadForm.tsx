import { useId, useState, type FormEvent } from "react";

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined;

type Status = "idle" | "sending" | "success" | "error";

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const nameId = useId();
  const phoneId = useId();
  const commentId = useId();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const comment = String(data.get("comment") || "").trim();

    if (!name || !phone) {
      setStatus("error");
      setErrorMessage("Укажите имя и телефон.");
      return;
    }

    if (!BOT_TOKEN || !CHAT_ID) {
      setStatus("error");
      setErrorMessage(
        "Форма пока не подключена к Telegram — не заданы VITE_TELEGRAM_BOT_TOKEN / VITE_TELEGRAM_CHAT_ID в .env.",
      );
      console.warn(
        "LeadForm: VITE_TELEGRAM_BOT_TOKEN / VITE_TELEGRAM_CHAT_ID не заданы, заявка не отправлена.",
        { name, phone, comment },
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const text =
      `<b>Новая заявка — Авто из Кореи</b>\n` +
      `Имя: ${escapeHtml(name)}\n` +
      `Телефон: ${escapeHtml(phone)}` +
      (comment ? `\nКомментарий: ${escapeHtml(comment)}` : "");

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
      });

      if (!res.ok) throw new Error(`Telegram API ответил ${res.status}`);

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("LeadForm: не удалось отправить заявку", err);
      setStatus("error");
      setErrorMessage("Не получилось отправить заявку. Попробуйте ещё раз или напишите нам напрямую.");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-[420px] rounded-2xl border border-white/15 bg-white/5 px-6 py-8 text-center">
        <p className="text-lg font-semibold text-white">Заявка отправлена</p>
        <p className="mt-2 text-sm text-[#a1a1a6]">Вернёмся с расчётом и вариантами в течение дня.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-[420px] flex-col gap-3 text-left">
      <div className="flex flex-col gap-1.5">
        <label htmlFor={nameId} className="text-xs font-medium uppercase tracking-[0.06em] text-[#a1a1a6]">
          Имя
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          required
          className="min-h-11 rounded-lg border border-white/15 bg-white/5 px-3.5 text-[15px] text-white outline-none placeholder:text-[#6b6b70] focus:border-[#9b1c2c]"
          placeholder="Как к вам обращаться"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={phoneId} className="text-xs font-medium uppercase tracking-[0.06em] text-[#a1a1a6]">
          Телефон
        </label>
        <input
          id={phoneId}
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className="min-h-11 rounded-lg border border-white/15 bg-white/5 px-3.5 text-[15px] text-white outline-none placeholder:text-[#6b6b70] focus:border-[#9b1c2c]"
          placeholder="+7 900 000-00-00"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={commentId} className="text-xs font-medium uppercase tracking-[0.06em] text-[#a1a1a6]">
          Комментарий
        </label>
        <textarea
          id={commentId}
          name="comment"
          rows={3}
          className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-[15px] text-white outline-none placeholder:text-[#6b6b70] focus:border-[#9b1c2c]"
          placeholder="Какая машина интересует, бюджет — что угодно"
        />
      </div>

      {status === "error" && <p className="text-sm text-[#ff6b6b]">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 inline-flex min-h-12 items-center justify-center rounded-full bg-[#9b1c2c] px-8 text-[17px] font-semibold tracking-[-0.01em] text-white transition-colors hover:bg-[#b02434] disabled:opacity-60"
      >
        {status === "sending" ? "Отправляем…" : "Оставить заявку"}
      </button>
    </form>
  );
}
