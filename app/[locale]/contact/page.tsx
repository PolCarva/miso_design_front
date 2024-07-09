import initTranslations from "@/app/i18n";
import Form from "@/components/Form";
import TranslationsProvider from "@/components/TranslationsProvider";

const ContactPage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t, resources } = await initTranslations(locale, ["contact"]);

  const texts = {
    name: t("name"),
    span: t("span"),
    email: t("email"),
    message: t("message"),
    send: t("send"),
    name_placeholder: t("name_placeholder"),
    email_placeholder: t("email_placeholder"),
    message_placeholder: t("message_placeholder"),
    success: t("success"),
    error: t("error"),
  };
  
  return (
    <>
      <section className="px-5 lg:px-16 mt-5">
        <Form texts={texts} />
      </section>
    </>
  );
};

export default ContactPage;
