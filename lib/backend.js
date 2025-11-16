import { where } from "firebase/firestore";
import { getCollection } from "./common";

const _formulationsTypesCache = {}
const _seriesCache = {}
const _productsCache = {}

export async function getFormulationTypes() {
    const docs = await getCollection({
        path: 'FormulationTypes',
        constraints: [where('active', '==', true)]
    });
    return docs.map(d => {
        _formulationsTypesCache[d.id] = d.abbreviation
        return d.abbreviation
    })
}

export async function getProductSeries() {
    const docs = await getCollection({
        path: 'ProductSeries',
        constraints: [where('active', '==', true)]
    });
    return docs.map(d => {
        _seriesCache[d.id] = d.title
        return d.title
    })
}

export async function getProducts() {
    const docs = await getCollection({
        path: 'Products',
        constraints: [where('active', '==', true)]
    });
    return docs.map(d => {
        _productsCache[d.id] = d.name
        return {
            name: d.name,
            series: _seriesCache[d.series.id],
            category: d.chemical_category,
            formulations: d.formulation_types.map(t => _formulationsTypesCache[t.id]),
        }
    })
}

export async function getFormulations() {
    const docs = await getCollection({
        path: 'FormulationGuides',
        constraints: [where('active', '==', true)]
    });
    return docs.map(d => {
        return {
            id: d.id,
            title: d.title,
            description: d.summary,
            fullDescription: d.disclaimer_md,
        }
    })
}
