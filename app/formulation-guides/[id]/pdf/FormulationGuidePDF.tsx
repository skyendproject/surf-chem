import { Formulation } from '@/types/formulation';
import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

export default function FormulationGuidePDF({ formulation }: { formulation: Formulation }) {
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
                            <Text style={styles.recommendedLabel}>RECOMMENDED FORMULATION</Text>
                            <Text style={styles.productTitleRed}>{formulation.title}</Text>
                            <Text style={styles.productCodeGreen}>
                                RECOMMENDED FORMULATION CODE: {formulation.code}
                            </Text>
                        </View>
                    </View>
                    <div style={styles.emptySpace} />
                    <div style={styles.emptySpace} />
                    <div style={styles.divider} />
                </View>
                <View style={styles.body}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>1. Short Description</Text>
                        <Text style={styles.bodyText}>{formulation.description}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>2. Development & Recommended Formulation</Text>
                        <Text style={styles.bodyText}>{formulation.detailedDescription}</Text>
                    </View>

                    <div style={styles.emptySpace} />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>3. Guide Formulation</Text>
                        <View style={styles.table}>

                            <View style={[styles.tableRow, styles.bgDarkest]}>
                                <View style={[styles.tableHeaderCell, styles.flexEnd]}><Text>{formulation.title}</Text></View>
                                <View style={[styles.tableHeaderCell, styles.flexFixed, styles.valueItalic, { fontWeight: 'normal' }]}><Text> {formulation.unit}</Text></View>
                            </View>

                            <View style={styles.tableRow}>
                                <View style={[styles.tableCell, styles.flexEnd, styles.bgDarkest]}></View>
                                <View style={[styles.tableCell, styles.flexEnd, styles.bgDark]}><Text>Formulation traceability code</Text></View>
                                <View style={[styles.tableCell, styles.flexFixed, styles.bgDark]}><Text> {formulation.code}</Text></View>
                            </View>

                            {formulation.functions.map((row, idx) => (
                                <View key={idx} style={styles.tableRow}>
                                    <View key={idx} style={[styles.tableCell, styles.flexEnd, styles.bgDarkest]}><Text> {row.title}</Text></View>
                                    <View key={idx} style={[styles.tableCell, styles.flexEnd, idx % 2 == 1 ? styles.bgDark : styles.bgNormal]}><Text> {row.type}</Text></View>
                                    <View key={idx} style={[styles.tableCell, styles.flexFixed, idx % 2 == 1 ? styles.bgDark : styles.bgNormal]}><Text> {row.result}</Text></View>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={[styles.table, styles.section]}>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, { flex: 2 }]}>
                                Xanthan gum stock solution
                            </Text>
                            <Text style={[styles.tableCell, { flex: 1 }]}>
                                {formulation.unit}
                            </Text>
                        </View>

                        {formulation.properties.filter(p => !p.type).map((row, idx) => (
                            <View key={idx} style={styles.tableRow}>
                                <Text style={[styles.tableCell, { flex: 2 }]}>
                                    {row.title}
                                </Text>
                                <Text style={[styles.tableCell, { flex: 1 }]}>
                                    {row.result}
                                </Text>
                            </View>
                        ))}
                    </View>

                    <View style={[styles.table, styles.section]}>
                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, { flex: 2 }]}>Process parameters</Text>
                            <Text style={[styles.tableCell, { flex: 1 }]}></Text>
                        </View>

                        {formulation.properties.filter(p => p.type).map((row, idx) => (
                            <View key={idx} style={styles.tableRow}>
                                <Text style={[styles.tableCell, { flex: 2 }]}>{row.title}</Text>
                                <Text style={[styles.tableCell, { flex: 1 }]}>{row.result}</Text>
                            </View>
                        ))}
                    </View>

                    <div style={styles.emptySpace} />

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>4. Formulation Procedure</Text>
                        <Text style={styles.bodyText}>{formulation.formulationProcedure?.toString().replaceAll('\n', '\n\n')}</Text>
                    </View>

                    <View style={[styles.section, { paddingLeft: 24 }]}>
                        <Text style={[styles.sectionTitle, styles.valueItalic]}>5. Critical to watch</Text>
                        <Text style={styles.bodyText}>{formulation.criticalInfo}</Text>
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
                </View>
                <View style={styles.footer} fixed>
                    <View style={styles.header}>
                        <View style={[{ flexDirection: 'column' }]}>
                            <Text>{"Revision #: " + formulation.issue_no}</Text>
                            <Text>{"Revision Date: " + formulation.issued_at.split(',')[0]}</Text>
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
        maxWidth: '35%',
    },
    logo: {
        height: 50,
        marginRight: 12,
    },
    headerRight: {
        alignItems: 'flex-end',
        maxWidth: '65%',
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
        color: '#0070C0',
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
    flexFixed: {
        flex: 1,
        justifyContent: 'flex-end',
        maxWidth: "100px",
    },
    tableHeaderCell: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#ffffff',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRightWidth: 0.5,
        borderRightColor: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
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
    valueItalic: {
        fontStyle: 'italic'
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
    bgNormal: {
        backgroundColor: '#D9F3D0',
        color: '#000000',
    },
    bgDark: {
        backgroundColor: '#B3E5A1',
        color: '#000000',
    },
    bgDarkest: {
        backgroundColor: '#4EA72E',
        color: '#ffffff',
    },
});
