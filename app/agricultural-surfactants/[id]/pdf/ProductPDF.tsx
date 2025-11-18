import { Product } from '@/data/technologies/agriculturalSurfactants';
import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

export default function ProductPDF({ product }: { product: Product }) {
    const logoUrl = 'https://www.surfchem.co.uk/assets/image/logo/logo.png'

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
                    <Text style={styles.sectionTitle}>1. Introduction</Text>
                    <Text style={styles.bodyText}>{product.introduction_md}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>2. Application & Use</Text>
                    <Text style={styles.bodyText}>{product.application_md}</Text>
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
        marginBottom: 24,
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
        fontSize: 14,
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
        marginBottom: 18,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#0070C0',
        marginBottom: 8,
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
        backgroundColor: '#3B8E22',
    },
    tableHeaderCell: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#FFFFFF',
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
    }
});
