"use client";

import { FormEvent, useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "time" | "number" | "select" | "textarea";
  required?: boolean;
  options?: string[];
};

type Props = {
  title: string;
  submitLabel: string;
  confirmation: string;
  fields: Field[];
};

export default function PrototypeForm({ title, submitLabel, confirmation, fields }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  };

  return (
    <form className="rp-form" onSubmit={handleSubmit}>
      <div>
        <p className="rp-eyebrow">PORTFOLIO PROTOTYPE</p>
        <h3 style={{fontSize:"2rem", marginTop:"8px"}}>{title}</h3>
      </div>
      <div className="rp-form-grid">
        {fields.map((field) => {
          const className = `rp-field ${field.type === "textarea" ? "rp-field--full" : ""}`;
          return (
            <label className={className} key={field.name}>
              <span>{field.label}</span>
              {field.type === "select" ? (
                <select name={field.name} required={field.required} defaultValue="">
                  <option value="" disabled>Select</option>
                  {field.options?.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              ) : field.type === "textarea" ? (
                <textarea name={field.name} required={field.required} />
              ) : (
                <input name={field.name} type={field.type ?? "text"} required={field.required} min={field.type === "number" ? 1 : undefined} />
              )}
            </label>
          );
        })}
      </div>
      <button className="rp-button rp-button--gold" type="submit">{submitLabel}</button>
      <p className="rp-note">This interaction demonstrates the intended guest journey. No live reservation or payment backend is connected.</p>
      {submitted ? <div className="rp-confirmation" role="status">{confirmation}</div> : null}
    </form>
  );
}
