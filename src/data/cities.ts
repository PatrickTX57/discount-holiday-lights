export interface CityInfo {
    slug: string;
  name: string;
  region: string;
  intro: string;
}

export const cities: CityInfo[] = [
{
    slug: 'north-dallas',
          name: 'North Dallas',
          region: 'Dallas County',
          intro:
            "North Dallas is home turf for us — mature trees, tall rooflines and established neighborhoods where a clean, commercial-grade lighting job stands out from the extension-cord version next door.",
      },
{
    slug: 'plano',
          name: 'Plano',
          region: 'Collin County',
          intro:
            "Plano's two-story homes and long roof runs are exactly what our roofline and second-story pricing is built for. We're on these streets every season.",
      },
{
    slug: 'richardson',
          name: 'Richardson',
          region: 'Dallas County',
          intro:
            'Richardson’s tree-lined blocks take well to a lit roofline paired with wrapped trunks and lit greenery on the entry — we install, maintain and take it all down.',
      },
{
    slug: 'allen',
          name: 'Allen',
          region: 'Collin County',
          intro:
            'From new-build rooflines to mature-tree lots, Allen homeowners book us for the same reason: premium LED that keeps running all season without another call.',
      },
{
    slug: 'highland-park',
          name: 'Highland Park',
          region: 'Dallas County',
          intro:
            'Highland Park expects the work to be done right the first time — clean lines, commercial-grade LED, and a crew that pulls the sign and the lights on schedule.',
      },
{
    slug: 'lakewood',
          name: 'Lakewood',
          region: 'Dallas County',
          intro:
            'Lakewood’s older homes and mature canopy call for careful installation around real trees and rooflines — not just clipped gutters.',
      },
{
    slug: 'preston-hollow',
          name: 'Preston Hollow',
          region: 'Dallas County',
          intro:
            'Preston Hollow properties get the full package — roofline, trees, lit greenery at the entry — installed, maintained all season, and stored until next year.',
      },
];
