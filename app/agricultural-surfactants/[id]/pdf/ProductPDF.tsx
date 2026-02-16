import { Product } from '@/data/technologies/agriculturalSurfactants';
import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

export default function ProductPDF({ product, formulationTypes }: { product: Product, formulationTypes: string[] }) {
    // return (
    //     <Document>
    //         <Page size="A4" style={styles.page}>
    //             <Text>Sign in to see the pdf</Text>
    //         </Page>
    //     </Document>
    // )

    const logoUrl = 'https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/surfactant-chemicals-admin-c4s3ys/assets/7w2j9vjhm651/logo.png'

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image src={logoUrl} style={styles.logo} />
                    </View>

                    <View style={styles.headerRight}>
                        <Text style={styles.recommendedLabel}>{product.name}</Text>
                        <Text style={styles.productTitleRed}>AGRICULTURAL SURFACTANT</Text>
                        <Text style={styles.productCodeGreen}>TECHNICAL DATA SHEET</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <div style={styles.sectionDivider} />
                    <View style={styles.infoRow}>
                        <Text style={styles.valueBold}>Surfactant Series</Text>
                        <Text style={[styles.valueBold, { flex: 2 }]}>Surfactant Name</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.value}>{product.series}</Text>
                        <Text style={[styles.value, { flex: 2 }]}>{product.name}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.valueBold}>Chemical Category</Text>
                        <Text style={[styles.valueBold, { flex: 2 }]}>Chemical Name</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.value}>{product.chemical_category}</Text>
                        <Text style={[styles.value, { flex: 2 }]}>{product.chemical_name}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.valueBold}>CAS Number</Text>
                        <Text style={[styles.valueBold, { flex: 2 }]}>Alternate Name</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.value}>{product.case_no}</Text>
                        <Text style={[styles.value, { flex: 2 }]}>{product.alternate_name}</Text>
                    </View>
                    <div style={styles.sectionDivider} />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>1. Introduction</Text>
                    <Text style={styles.bodyText}>{product.introduction_md}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>2. Application & Use</Text>
                    <Text style={styles.bodyText}>{product.application_md}</Text>
                </View>

                <View style={styles.section}>
                    <div style={styles.sectionDivider} />
                    <View style={styles.infoRow}>
                        <Text style={[styles.value, styles.valueItalic]}>Ionicity:</Text>
                        <Text style={[styles.value, styles.valueItalic, { flex: 2 }]}>Function:</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.value}>{product.ionicity}</Text>
                        <Text style={[styles.value, { flex: 2 }]}>{product.function}</Text>
                    </View>
                    <View style={styles.emptyRow} />
                    <View style={styles.infoRow}>
                        <Text style={[styles.value, styles.valueItalic]}>Applicable Formulation Types:</Text>
                        <div style={{ flex: 2, flexDirection: 'column' }} >
                            <Text style={[styles.value, { flex: 2, paddingBottom: 10 }]}>{formulationTypes.join('   ')}</Text>
                            <Text style={[styles.value, { flex: 2 }]}>{formulationTypes.map(f => product.formulation_types.includes(f) ? f : '').join('   ')}</Text>
                        </div>
                    </View>
                    <div style={styles.sectionDivider} />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>3. Typical Properties</Text>
                    <View style={styles.table}>
                        <View style={[styles.tableRow, styles.tableHeaderRow]}>
                            <Text style={[styles.tableHeaderCell, { flex: 1 }]}>Paramter</Text>
                            <Text style={[styles.tableHeaderCell, { flex: 1 }]}>Instrument</Text>
                            <Text style={[styles.tableHeaderCell, { flex: 1 }]}>Method</Text>
                            <Text style={[styles.tableHeaderCell, { flex: 1 }]}>Unit</Text>
                            <Text style={[styles.tableHeaderCell, { flex: 1 }]}>Result</Text>
                        </View>

                        {product.physical_properties.map((row, idx) => (
                            <View key={idx} style={styles.tableRow}>
                                <Text style={[styles.tableCell, { flex: 1 }]}>{row.title}</Text>
                                <Text style={[styles.tableCell, { flex: 1 }]}>{row.instrument}</Text>
                                <Text style={[styles.tableCell, { flex: 1 }]}>{row.method}</Text>
                                <Text style={[styles.tableCell, { flex: 1 }]}>{row.unit}</Text>
                                <Text style={[styles.tableCell, { flex: 1 }]}>{row.result}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>4. Futher Information</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.value}>Typical Usage</Text>
                        <Text style={styles.value}>%</Text>
                        <Text style={styles.value}>{product.usage}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.value}>Pack size</Text>
                        <Text style={styles.value}>Kgs</Text>
                        <Text style={styles.value}>{product.pack_size}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.value}>Container Type</Text>
                        <Text style={styles.value}>Material</Text>
                        <Text style={styles.value}>{product.container_type}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.value}>Shelf life</Text>
                        <Text style={styles.value}>Days</Text>
                        <Text style={styles.value}>{product.shelf_life}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.value}>DOT Classification</Text>
                        <Text style={styles.value}></Text>
                        <Text style={styles.value}>{product.dot_class}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.value}>Biodegradability</Text>
                        <Text style={styles.value}></Text>
                        <Text style={styles.value}>{product.biodegradability}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.value}>EPA 40 CFR Listing</Text>
                        <Text style={styles.value}>Status</Text>
                        <Text style={styles.value}>{product.cfr_listing}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>5. Handling and storage</Text>
                    <Text style={styles.bodyText}>{product.storage_1_md}</Text>
                    <Text style={styles.bodyText}>{product.storage_2_md}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>6. Additional safety information </Text>
                    <Text style={styles.bodyText}>{product.safety_md}</Text>
                </View>

                <View style={styles.divider} />
                <Text style={styles.bodyText}>
                    The information in this publication is believed to be accurate and is given in good faith but no representation
                    or warranty as to its completeness or accuracy is made. Suggestions for uses or applications are only
                    opinions. Users are responsible for determining the suitability of these products for their own particular
                    purpose. No representation or warranty, express or implied, is made with respect to information or products
                    including without limitation warranties of merchantability or fitness for a particular purpose or non
                    infringement of any third-party patent or other intellectual property rights including without limit copyright,
                    trademark, and designs.
                </Text>
            </Page>
        </Document>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 32,
        fontFamily: 'Helvetica',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '55%',
    },
    logo: {
        height: 50,
        marginRight: 12,
    },
    headerRight: {
        alignItems: 'flex-end',
        maxWidth: '45%',
    },
    recommendedLabel: {
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: 'medium',
    },
    productTitleRed: {
        fontSize: 11,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 4,
    },
    productCodeGreen: {
        fontSize: 10,
        color: 'green',
        marginTop: 2,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    bodyText: {
        fontSize: 9,
        lineHeight: 1.4,
        color: '#333333',
    },
    table: {
        marginTop: 4,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    tableRow: {
        flexDirection: 'row',
        minHeight: 16,
    },
    tableHeaderRow: {
        backgroundColor: '#95DCF7',
    },
    tableHeaderCell: {
        fontSize: 9,
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRightWidth: 0.5,
        borderRightColor: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
    },
    tableCell: {
        fontSize: 9,
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRightWidth: 0.5,
        borderRightColor: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
    },
    divider: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000000', // black line
        opacity: 0.5,
    },
    sectionDivider: {
        marginBottom: 6,
        marginTop: 6,
        borderBottomWidth: 0.5,
        borderBottomColor: '#000000', // black line
        opacity: 0.5,
    },
    infoRow: {
        flexDirection: "row",
    },
    value: {
        flex: 1,
        fontSize: 9,
        lineHeight: 1.4,
        color: '#333333',
    },
    valueBold: {
        flex: 1,
        fontSize: 11,
        lineHeight: 1.4,
        color: 'black',
        fontWeight: 'bold'
    },
    valueItalic: {
        fontStyle: 'italic'
    },
    emptyRow: {
        height: "20px",
        backgroundColor: '#95DCF7',
        marginVertical: 4,
    },
});
