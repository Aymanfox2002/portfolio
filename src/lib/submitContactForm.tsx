import { toast } from "sonner";
import { FormProps } from "@/types/contact";

export async function submitContactForm(values: FormProps): Promise<void> {
  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error("Failed");
    toast("Your message has been sent successfully ✅", {
      description: "I will get back to you as soon as possible.",
      action: {
        label: "Close",
        onClick: () => console.log("Undo"),
      },
      className: "bg-green-100",
    });
  } catch (error) {
    toast("I'm sorry, something went wrong ❌", {
      description: "Please try again later or contact me directly via social media.",
      action: {
        label: "Close",
        onClick: () => console.log("Undo"),
      },
      className: "bg-green-100",
    });
  }
}
