import { Page, Text, View, Document } from "@react-pdf/renderer";

const PdfDocument = ({ obj }) => {
  console.log(obj.items);
  var oth = [];

  return (
    <Document>
      <Page>
        <View>
          <Text>{obj.name}</Text>
        </View>
        {obj?.items?.length && (
          <View>
            {obj.items.map((item) => {
              return <Text>-{item.name}</Text>;
            })}

            {obj.items.map((item) => {
              if (item.items.length) {
                oth = item.items.map((item) => {
                  return <Text>---{item.name}</Text>;
                });
              }
            })}
            {oth.map((item) => item)}
          </View>
        )}
      </Page>
    </Document>
  );
};

export { PdfDocument };
