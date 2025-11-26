export interface Article {
  $id: string
  $createdAt: string
  $updatedAt: string
  articleTitle: string
  introductionSubheading: string
  introductionContent: string
  contentOneSubheadingTitle: string
  contentOneParagraph: string
  contentTwoSubheadingTitle: string
  contentTwoParagraph: string
  contentThreeSubheadingTitle: string
  contentThreeParagraph: string
  conclusionSubheading: string
  conclusionParagraph: string
  extraSubheading?: string
  extraContentParagraph?: string
  pexelImgLink?: string
  pexelImgLink2?: string
  date: string
}
