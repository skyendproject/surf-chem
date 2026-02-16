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
                <View style={styles.headerWrapper} fixed>
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
                    <div style={styles.emptySpace} />
                    <div style={styles.emptySpace} />
                    <div style={styles.divider} />
                </View>
                <View style={styles.body}>
                    <div style={styles.sectionDivider} />
                    <View style={[styles.section, { paddingVertical: 4, marginVertical: 4 }]}>
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
                    </View>
                    <div style={styles.sectionDivider} />
                    <div style={styles.emptySpace} />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>1. Introduction</Text>
                        <Text style={styles.bodyText}>{product.introduction_md}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>2. Application & Use</Text>
                        <Text style={styles.bodyText}>{product.application_md}</Text>
                    </View>

                    <div style={styles.sectionDivider} />
                    <View style={[styles.section, { paddingVertical: 6 }]}>
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
                                <Text style={[styles.value, { paddingBottom: 12 }]}>{formulationTypes.join('   ')}</Text>
                                <Text style={[styles.value]}>{formulationTypes.map(f => product.formulation_types.includes(f) ? f : '').join('   ')}</Text>
                            </div>
                        </View>
                    </View>
                    <div style={styles.sectionDivider} />
                    <div style={styles.emptySpace} />
                    <div style={styles.emptySpace} />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>3. Typical Properties</Text>
                        <View style={styles.table}>
                            <View style={[styles.tableRow, styles.tableAltRow]}>
                                <View style={[styles.tableHeaderCell, styles.flexEnd, styles.valueItalic, styles.cellText]}><Text>Parameter</Text></View>
                                <View style={[styles.tableHeaderCell, styles.flexEnd, styles.valueItalic, styles.cellTextSmall]}><Text>Instrument</Text></View>
                                <View style={[styles.tableHeaderCell, styles.flexEnd, styles.valueItalic, styles.cellTextSmall]}><Text>Method</Text></View>
                                <View style={[styles.tableHeaderCell, styles.flexEnd, styles.valueItalic, styles.cellTextSmall]}><Text>Unit</Text></View>
                                <View style={[styles.tableHeaderCell, styles.flexEnd, styles.valueItalic, styles.cellText]}><Text>Result</Text></View>
                            </View>

                            {product.physical_properties.map((row, idx) => (
                                <View key={idx} style={[styles.tableRow, idx % 2 === 1 ? styles.tableAltRow : styles.tableRow]}>
                                    <View style={[styles.tableCell, styles.flexEnd, styles.cellText]}><Text>{row.title}</Text></View>
                                    <View style={[styles.tableCell, styles.flexEnd, styles.valueItalic, styles.cellTextSmall]}><Text>{row.instrument}</Text></View>
                                    <View style={[styles.tableCell, styles.flexEnd, styles.valueItalic, styles.cellTextSmall]}><Text>{row.method}</Text></View>
                                    <View style={[styles.tableCell, styles.flexEnd, styles.valueItalic, styles.cellTextSmall]}><Text>{row.unit}</Text></View>
                                    <View style={[styles.tableCell, styles.flexEnd, styles.cellText]}><Text>{row.result}</Text></View>
                                </View>
                            ))}
                        </View>
                    </View>
                    <div style={styles.emptySpace} />

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
                    <View style={styles.emptySpace} />
                    <Text style={styles.bodyText}>
                        The information in this publication is believed to be accurate and is given in good faith but no representation
                        or warranty as to its completeness or accuracy is made. Suggestions for uses or applications are only
                        opinions. Users are responsible for determining the suitability of these products for their own particular
                        purpose. No representation or warranty, express or implied, is made with respect to information or products
                        including without limitation warranties of merchantability or fitness for a particular purpose or non
                        infringement of any third-party patent or other intellectual property rights including without limit copyright,
                        trademark, and designs.
                    </Text>
                </View>
                <View style={styles.footer} fixed>
                    <View style={styles.header}>
                        <View style={[{ flexDirection: 'column' }]}>
                            <Text>{"Revision #: " + product.rev_no}</Text>
                            <Text>{"Revision Date: " + product.manufactured_at}</Text>
                        </View>
                        <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
                    </View>
                </View>
            </Page>
        </Document>
    );
};

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        fontFamily: 'Helvetica',
    },
    headerWrapper: {
        padding: 14,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    body: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 0,
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
        marginBottom: 6,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    bodyText: {
        fontSize: 9,
        lineHeight: 1.2,
        marginBottom: 6,
        color: '#333333',
    },
    table: {
        marginTop: 4,
        borderWidth: 0.5,
        borderColor: 'black',
        borderBottomWidth: 0,
        borderRightWidth: 0,
    },
    tableRow: {
        flexDirection: 'row',
    },
    flexEnd: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    tableAltRow: {
        backgroundColor: '#95DCF7',
    },
    tableHeaderCell: {
        fontSize: 9,
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRightWidth: 0.5,
        borderRightColor: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
    },
    cellText: {
        fontSize: 9,
        color: 'black',
    },
    cellTextSmall: {
        fontSize: 6,
        color: 'black',
    },
    tableCell: {
        fontSize: 9,
        paddingVertical: 2,
        color: 'black',
        paddingHorizontal: 6,
        borderRightWidth: 0.5,
        borderRightColor: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
    },
    divider: {
        margin: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        opacity: 0.5,
    },
    sectionDivider: {
        margin: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: '#000000',
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
    emptySpace: {
        height: "10px",
    },
    footer: {
        margin: 14,
        paddingHorizontal: 32,
        paddingTop: 12,
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: 'black',
        fontSize: 9,
        color: '#666666',
    },
});
