import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [clicked, setClicked] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClicked(true);

    if (form.current)
      emailjs
        .sendForm(
          "service_7o8813p",
          "template_9vgnotm",
          form.current,
          "tADmcVNZkQqg_poz_"
        )
        .then(
          (result) => {
            console.log(form.current);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  return (
    <form ref={form} onSubmit={(e) => sendEmail(e)}>
      {!clicked ? (
        <>
          <input
            type="email"
            name="email"
            className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@email.domain"
            required
          />
          <button
            className="bg-blue-500 text-gray-50 text-sm px-3 py-1 rounded-lg hover:bg-blue-600"
            type="submit"
          >
            submit
          </button>
        </>
      ) : (
        <>
          <br />
          <p>thank you!</p>
          <br />
          <button className="bg-blue-500 text-gray-50 text-sm px-3 py-1 rounded-lg hover:bg-blue-600">
            <a href="/learn_more">learn more!</a>
          </button>
        </>
      )}
    </form>
  );
};

export default Form;
