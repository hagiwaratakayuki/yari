function getNote(noteLinktext: string, noteType: string) {
  const url =
    noteType === "neutral"
      ? "/en-US/docs/MDN/Contribute/Localize#active_locales"
      : "https://github.com/mdn/translated-content#promoting-an-inactive-locale-to-tier-1";
  return (
    <div className={`localized-content-note notecard inline ${noteType}`}>
      <a href={url} className={!url.startsWith("/") ? "external" : undefined}>
        {noteLinktext}
      </a>
    </div>
  );
}

export function LocalizedContentNote({
  isActive,
  locale,
}: {
  isActive: boolean;
  locale: string;
}) {
  const activeLocaleNoteContent = {
    "en-US": {
      linkText:
        "This page was translated from English by the community. Learn more and join the MDN Web Docs community.",
    },
    fr: {
      linkText:
        "Cette page a été traduite à partir de l'anglais par la communauté. Vous pouvez également contribuer en rejoignant la communauté francophone sur MDN Web Docs.",
    },
    ko: {
      linkText:
        "이 페이지는 커뮤니티에서 영어로 번역되었습니다. MDN Web Docs에서 한국 커뮤니티에 가입하여 자세히 알아보세요.",
    },
  };
  const inactiveLocaleNoteContent = {
    de: {
      linkText:
        "Der Inhalt dieser Seite wurde von der Community übersetzt, jedoch wird er nicht mehr aktiv gepflegt und kann daher veraltet sein. Wenn du mithelfen möchtest, kannst du hier herausfinden wie deaktivierte Übersetzung reaktiviert werden.",
    },
    "en-US": {
      linkText:
        "This page was translated from English by the community, but it's not maintained and may be out-of-date. To help maintain it, learn how to activate locales.",
    },
    es: {
      linkText:
        "Esta página fue traducida del inglés por la comunidad, pero no se mantiene activamente, por lo que puede estar desactualizada. Si desea ayudar a mantenerlo, descubra cómo activar las configuraciones regionales inactivas.",
    },
  };

  const noteLinktext = isActive
    ? activeLocaleNoteContent[locale] || activeLocaleNoteContent["en-US"]
    : inactiveLocaleNoteContent[locale] || inactiveLocaleNoteContent["en-US"];
  const noteType = isActive ? "neutral" : "warning";

  return getNote(noteLinktext.linkText, noteType);
}
