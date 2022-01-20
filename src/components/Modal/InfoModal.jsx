import {
  ModalContainer,
  TextLink,
  SectionTitle,
  SourcesContainer,
  TitleContainer,
  Logo,
  Name,
} from "./Modal_styes";

const InfoModal = ({ moreInfo, name, logo }) => {
  const sources = moreInfo.sources;
  return (
    <ModalContainer>
      <TitleContainer>
        <Name>{name}</Name>
        <Logo src={logo} />
      </TitleContainer>
      <SectionTitle>Sources</SectionTitle>

      {sources && (
        <SourcesContainer>
          {sources.co2_emissions && (
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              href={sources.co2_emissions}
            >
              <TextLink>CO2 Emissions</TextLink>{" "}
            </a>
          )}
          {sources.official_website && (
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              href={sources.official_website}
            >
              <TextLink>Official Website</TextLink>{" "}
            </a>
          )}
        </SourcesContainer>
      )}
    </ModalContainer>
  );
};

export default InfoModal;
