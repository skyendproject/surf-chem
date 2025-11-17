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

export async function getProducts() {
    let docs = await readCollection('Products', [where('active', '==', true)]);
    docs = docs.map(d => {
        return {
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
        description: d.summary,
        fullDescription: d.disclaimer_md,
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
