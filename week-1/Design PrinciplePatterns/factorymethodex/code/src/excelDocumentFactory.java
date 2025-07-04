public class excelDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new excelDocument();
    }
}
