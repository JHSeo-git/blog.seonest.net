// TODO:
// remove this component when the issue is resolved.
// - https://github.com/giscus/giscus-component/issues/1976
interface GiscusWidgetAttributes {
  id?: string;
  host?: string;
  repo: `${string}/${string}`;
  repoid: string;
  category?: string;
  categoryid?: string;
  mapping: import('@giscus/react').Mapping;
  term?: string;
  theme?: import('@giscus/react').Theme;
  strict?: import('@giscus/react').BooleanString;
  reactionsenabled?: import('@giscus/react').BooleanString;
  emitmetadata?: import('@giscus/react').BooleanString;
  inputposition?: import('@giscus/react').InputPosition;
  lang?: import('@giscus/react').AvailableLanguage;
  loading?: import('@giscus/react').Loading;
}

declare namespace JSX {
  interface IntrinsicElements {
    'giscus-widget': GiscusWidgetAttributes;
  }
}
