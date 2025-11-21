import { 
  getProducts, 
  getFormulations, 
  getNews, 
  getTechnicalBriefs, 
  getResearchPapers, 
  getWhitePapers,
  getCareers,
  getRegionalContacts
} from "./backend";

export interface SearchResult {
  id: string;
  type: string;
  title: string;
  description?: string;
  url: string;
}

export async function searchAll(query: string): Promise<SearchResult[]> {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return [];

  const results: SearchResult[] = [];

  try {
    // Search Products
    const products = await getProducts();
    products.forEach(product => {
      const searchableText = `${product.name} ${product.series} ${product.category} ${product.formulations?.join(' ')}`.toLowerCase();
      if (searchableText.includes(searchTerm)) {
        results.push({
          id: product.id,
          type: 'Product',
          title: product.name,
          description: `${product.series} - ${product.category}`,
          url: `/agricultural-surfactants/${product.id}`
        });
      }
    });

    // Search Formulations
    const formulations = await getFormulations();
    formulations.forEach(formulation => {
      const searchableText = `${formulation.title} ${formulation.description} ${formulation.fullDescription} ${formulation.code}`.toLowerCase();
      if (searchableText.includes(searchTerm)) {
        results.push({
          id: formulation.id,
          type: 'Formulation Guide',
          title: formulation.title,
          description: formulation.description,
          url: `/formulation-guides/${formulation.id}`
        });
      }
    });

    // Search News
    const news = await getNews();
    news.forEach(item => {
      const searchableText = `${item.title} ${item.excerpt} ${item.content}`.toLowerCase();
      if (searchableText.includes(searchTerm)) {
        results.push({
          id: item.id,
          type: 'News',
          title: item.title,
          description: item.excerpt,
          url: `/news/${item.slug}`
        });
      }
    });

    // Search Technical Briefs
    const technicalBriefs = await getTechnicalBriefs();
    technicalBriefs.forEach(brief => {
      const searchableText = `${brief.title} ${brief.description}`.toLowerCase();
      if (searchableText.includes(searchTerm)) {
        results.push({
          id: brief.id,
          type: 'Technical Brief',
          title: brief.title,
          description: brief.description,
          url: `/technical-briefs`
        });
      }
    });

    // Search Research Papers
    const researchPapers = await getResearchPapers();
    researchPapers.forEach(paper => {
      const searchableText = `${paper.title} ${paper.description}`.toLowerCase();
      if (searchableText.includes(searchTerm)) {
        results.push({
          id: paper.id,
          type: 'Research Paper',
          title: paper.title,
          description: paper.description,
          url: `/research-papers`
        });
      }
    });

    // Search White Papers
    const whitePapers = await getWhitePapers();
    whitePapers.forEach(paper => {
      const searchableText = `${paper.title} ${paper.description}`.toLowerCase();
      if (searchableText.includes(searchTerm)) {
        results.push({
          id: paper.id,
          type: 'White Paper',
          title: paper.title,
          description: paper.description,
          url: `/general-white-papers/${paper.id}`
        });
      }
    });

    // Search Careers
    const careers = await getCareers();
    careers.forEach(career => {
      const searchableText = `${career.title} ${career.location} ${career.jobSummary}`.toLowerCase();
      if (searchableText.includes(searchTerm)) {
        results.push({
          id: career.id,
          type: 'Career',
          title: career.title,
          description: `${career.location} - ${career.jobSummary?.substring(0, 150)}...`,
          url: `/careers/${career.id}`
        });
      }
    });

    // Search Regional Contacts
    const regionalContacts = await getRegionalContacts();
    regionalContacts.forEach(contact => {
      const searchableText = `${contact.title} ${contact.subtitle} ${contact.address} ${contact.email}`.toLowerCase();
      if (searchableText.includes(searchTerm)) {
        results.push({
          id: contact.id,
          type: 'Regional Contact',
          title: contact.title,
          description: contact.subtitle || contact.address,
          url: `/contact-us/${contact.id}`
        });
      }
    });

  } catch (error) {
    console.error('Search error:', error);
  }

  return results;
}

