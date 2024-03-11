import {
    Box,
    Card,
    Page,
    Text,
    BlockStack,
    TextField,
    InlineGrid,
    Layout,
  } from "@shopify/polaris";
  
  export default function SettingsPage() {
    return (
        <Page>
        <ui-title-bar title="Pricing" />
        <Layout>
            <Layout.Section>
                <BlockStack gap={{ xs: "800", sm: "400" }}>
                    <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
                    <Box
                        as="section"
                        paddingInlineStart={{ xs: 400, sm: 0 }}
                        paddingInlineEnd={{ xs: 400, sm: 0 }}
                    >
                        <BlockStack gap="400">
                        <Text as="h3" variant="headingMd">
                            Settings
                        </Text>
                        <Text as="p" variant="bodyMd">
                            Update app settings and preference.
                        </Text>
                        </BlockStack>
                    </Box>
                    <Card roundedAbove="sm">
                        <BlockStack gap="400">
                        <TextField label="App name" />
                        <TextField label="Description" />
                        </BlockStack>
                    </Card>
                    </InlineGrid>
                </BlockStack>
            </Layout.Section>   
        </Layout>
    </Page>
    );
  }
  