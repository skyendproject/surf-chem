import { where } from "firebase/firestore";
import { readCollection, readDocument } from "./common";

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
        formulation_types: d.formulation_types,
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
        series: d.series,
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
            category: _categoriesCache[d.category.id],
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
        category: _categoriesCache[d.category.id],
    }
}
