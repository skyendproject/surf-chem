import { where } from "firebase/firestore";
import { getDocRef, readCollection, readDocument } from "./common";

const _formulationsTypesCache = {}
const _seriesCache = {}
const _categoriesCache = {}

export async function getFormulationTypes() {
    const docs = await readCollection('FormulationTypes', [where('active', '==', true)]);
    return docs.map(d => {
        _formulationsTypesCache[d.id] = d.abbreviation
        return d.abbreviation
    })
}

export async function getProductSeries() {
    const docs = await readCollection('ProductSeries', [where('active', '==', true)]);
    return docs.map(d => {
        _seriesCache[d.id] = d.title
        return d.title
    })
}

export async function getSingleProductSeries(id) {
    const d = await readDocument(id, 'ProductSeries')
    _seriesCache[d.id] = d.title
    return d.title
}

export async function getProductClasses() {
    const docs = await readCollection('ProductClasses', [where('active', '==', true)]);
    return docs.map(d => {
        return {
            id: d.id,
            title: d.title,
            code: d.code,
            summary: d.summary,
        }
    })
}

export async function getProductClass(id) {
    const d = await readDocument(id, 'ProductClasses')
    return {
        id: d.id,
        title: d.title,
        code: d.code,
        summary: d.summary,
    }
}

export async function getProduct(id) {
    const d = await readDocument(id, 'Products')
    return {
        id: d.id,
        active: d.active,
        alternate_name: d.alternate_name,
        application_md: d.application_md,
        biodegradability: d.biodegradability,
        case_no: d.case_no,
        cfr_listing: d.cfr_listing,
        chemical_category: d.chemical_category,
        chemical_name: d.chemical_name,
        container_type: d.container_type,
        created_at: d.created_at.toDate().toLocaleString(),
        disclaimer_md: d.disclaimer_md,
        dot_class: d.dot_class,
        formulation_types: d.formulation_types.map(t => _formulationsTypesCache[t.id]),
        function: d.function,
        id: d.id,
        in_stock: d.in_stock,
        introduction_md: d.introduction_md,
        ionicity: d.ionicity,
        is_new_product: d.is_new_product,
        manufactured_at: d.manufactured_at,
        name: d.name,
        pack_size: d.pack_size,
        physical_properties: d.physical_properties,
        reach: d.reach,
        rev_no: d.rev_no,
        safety_md: d.safety_md,
        sbu: d.sbu,
        series: _seriesCache[d.series.id] || await getSingleProductSeries(d.series.id),
        shelf_life: d.shelf_life,
        storage_1_md: d.storage_1_md,
        storage_2_md: d.storage_2_md,
        usage: d.usage,
    }
}

export async function getProducts() {
    let docs = await readCollection('Products', [where('active', '==', true)]);
    docs = docs.map(d => {
        return {
            id: d.id,
            name: d.name,
            series: _seriesCache[d.series.id],
            category: d.chemical_category,
            formulations: d.formulation_types.map(t => _formulationsTypesCache[t.id]),
        }
    })
    docs.sort((a, b) => {
        if (a.series < b.series) return -1;
        if (a.series > b.series) return 1;
        return 0;
    })
    return docs
}

export async function getProductsByClass(classId) {
    const classRef = getDocRef(classId, 'ProductClasses');
    let docs = await readCollection('Products', [where('active', '==', true), where('classes', 'array-contains', classRef)]);
    docs = docs.map(d => {
        return {
            id: d.id,
            name: d.name,
            series: _seriesCache[d.series.id],
            category: d.chemical_category,
            formulations: d.formulation_types.map(t => _formulationsTypesCache[t.id]),
        }
    })
    docs.sort((a, b) => {
        if (a.series < b.series) return -1;
        if (a.series > b.series) return 1;
        return 0;
    })
    return docs
}

export async function getFormulations() {
    const docs = await readCollection('FormulationGuides', [where('active', '==', true)]);
    return docs.map(d => {
        return {
            id: d.id,
            title: d.title,
            description: d.summary,
            fullDescription: d.disclaimer_md,
        }
    })
}

export async function getFormulation(id) {
    const d = await readDocument(id, 'FormulationGuides')
    return {
        id: d.id,
        title: d.title,
        documentTitle: d.document_title,
        code: d.code,
        unit: d.unit,
        description: d.summary,
        detailedDescription: d.disclaimer_md,
        formulationProcedure: d.formulation_procedure_md,
        criticalInfo: d.critical_info_md,
        functions: d.functions.map(f => {
            return {
                title: f.title,
                type: f.function,
                result: f.result,
            }
        }),
        properties: d.properties.map(f => {
            return {
                title: f.title,
                type: f.function,
                result: f.result,
            }
        })
    }
}

export async function getCategories() {
    const docs = await readCollection('Categories', [where('active', '==', true)]);
    return docs.map(d => {
        _categoriesCache[d.id] = d.title
        return {
            id: d.id,
            title: d.title,
        }
    })
}

export async function getNews() {
    const docs = await readCollection('News', [where('active', '==', true)]);
    return docs.map(d => {
        return {
            id: d.id,
            title: d.title,
            slug: d.seo?.url_alias || d.id,
            excerpt: d.summary,
            content: d.description_md,
            image: d.image,
            date: d.created_at.toDate().toLocaleString(),
            category: ''
        }
    })
}

export async function getSingleNews(id) {
    const d = await readDocument(id, 'News')
    return {
        id: d.id,
        title: d.title,
        slug: d.seo?.url_alias || d.id,
        excerpt: d.summary,
        content: d.description_md,
        image: d.image,
        date: d.created_at.toDate().toLocaleString(),
        category: ''
    }
}

export async function getTechnicalBriefs() {
    const docs = await readCollection('TechnicalBriefs', [where('active', '==', true)]);
    return docs.map(d => {
        return {
            id: d.id,
            slug: d.id,
            title: d.title,
            description: d.summary,
            downloadUrl: d.pdf,
        }
    })
}

export async function getResearchPapers() {
    const docs = await readCollection('ResearchPapers', [where('active', '==', true)]);
    return docs.map(d => {
        return {
            id: d.id,
            slug: d.id,
            title: d.title,
            description: d.summary,
            downloadUrl: d.pdf,
        }
    })
}

export async function getWhitePapers() {
    const docs = await readCollection('WhitePapers', [where('active', '==', true)]);
    return docs.map(d => {
        return {
            id: d.id,
            title: d.title,
            description: d.description_md,
            image: d.image,
            pdf: d.pdf,
        }
    })
}

export async function getWhitePaper(id) {
    const d = await readDocument(id, 'WhitePapers')
    return {
        id: d.id,
        title: d.title,
        description: d.description_md,
        image: d.image,
        pdf: d.pdf,
    }
}

export async function getCompanyHistory() {
    const d = await readDocument('default', 'CompanyHistory')
    return {
        id: d.id,
        title: d.title,
        description: d.description_md,
        global_presence: d.global_presence,
        vision: d.vision,
        mission: d.mission,
        values: d.values,
        focus_areas: d.focus_areas,
        seo: {
            page_title: d.seo?.page_title,
            url_alias: d.seo?.url_alias,
            meta_description: d.seo?.meta_description,
            og_image: d.seo?.og_image,
            keywords: d.seo?.keywords,
        },
        image: d.image,
        date: d.created_at.toDate().toLocaleString(),
    }
}

export async function getBoardOfDirectors() {
    const docs = await readCollection('BoardOfDirectors', [where('active', '==', true)]);
    return docs.map(d => {
        return {
            id: d.id,
            name: d.name,
            nationality: d.nationality,
            experience: d.experience,
            image: d.image,
            fullBio: [d.description],
        }
    })
}

export async function getBoardOfDirector(id) {
    const d = await readDocument(id, 'BoardOfDirectors')
    return {
        id: d.id,
        name: d.name,
        nationality: d.nationality,
        experience: d.experience,
        image: d.image,
        fullBio: [d.description_md],
    }
}

export async function getCareers() {
    const docs = await readCollection('Careers', [where('active', '==', true)]);
    return docs.map(d => {
        return {
            id: d.id,
            title: d.title,
            location: d.location,
            jobSummary: d.description_md,
        }
    })
}

export async function getCareer(id) {
    const d = await readDocument(id, 'Careers')
    return {
        id: d.id,
        title: d.title,
        location: d.location,
        jobSummary: d.description_md,
    }
}

export async function getRegionalContacts() {
    const docs = await readCollection('RegionalContact', [where('active', '==', true)]);
    return docs.map(d => {
        return {
            id: d.id,
            title: d.title,
            subtitle: d.subtitle,
            address: d.address,
            email: d.email,
        }
    })
}

export async function getRegionalContact(id) {
    const d = await readDocument(id, 'RegionalContact')
    return {
        id: d.id,
        title: d.title,
        subtitle: d.subtitle,
        address: d.address,
        email: d.email,
    }
}
