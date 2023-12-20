export interface SearchSuggestionProps {
    results: SearchSuggestionResult[];
}

export interface SearchSuggestionResult {
    hits:                Hit[];
    nbHits:              number;
    page:                number;
    nbPages:             number;
    hitsPerPage:         number;
    exhaustiveNbHits:    boolean;
    exhaustiveTypo:      boolean;
    exhaustive:          Exhaustive;
    query:               Query;
    params:              string;
    index:               string;
    renderingContent:    RenderingContent;
    extensions:          Extensions;
    processingTimeMS:    number;
    processingTimingsMS: ProcessingTimingsMS;
    serverTimeMS:        number;
}

export interface Exhaustive {
    nbHits: boolean;
    typo:   boolean;
}

export interface Extensions {
    queryCategorization: RenderingContent;
}

export interface RenderingContent {
}

export interface Hit {
    nb_words?:             number;
    popularity:            number;
    products?:             Products;
    query?:                string;
    objectID:              string;
    _highlightResult:      HighlightResult;
    _id?:                  string;
    id?:                   string;
    title?:                string;
    inventory?:            HitInventory;
    is_taxable?:           boolean;
    sku?:                  number;
    active?:               boolean;
    category?:             any[] | SearchCategory | null;
    brand?:                CategoryClass;
    price?:                number;
    description?:          string;
    short_description?:    string;
    images?:               HitImages;
    updated_at?:           number;
    created_at?:           number;
    categories?:           CategoryClass[];
    ranking?:              number;
    rankings?:             number;
    slug?:                 string;
    filter_price?:         number;
    collection?:           Collection | null;
    out_of_stock?:         boolean;
    collections?:          Collection[];
    description_ar?:       null | string;
    is_express_disabled?:  boolean;
    is_instant_disabled?:  boolean;
    max_salable_qty?:      number;
    options?:              Option[];
    seo?:                  SEO;
    short_description_ar?: null | string;
    tags?:                 null;
    title_ar?:             null | string;
    sale_price?:           number;
    tax_rate?:             TaxRate;
    unit?:                 Unit;
    unitprice?:            number;
    vat_p?:                number;
    min_cart_value?:       number;
    min_salable_qty?:      number;
    availability?:         Availability;
    ax_price_without_vat?: null;
    pre_order?:            boolean;
    type?:                 Type;
    markup_price?:         number | null;
    hide_from_search?:     boolean;
    standard_only?:        boolean;
    wh_type?:              null | string;
    disable_intl?:         boolean;
    label?:                Label | null;
    offers?:               null;
    prices?:               PriceElement[];
    rating?:               number;
    vat_percentage?:       number;
    maximum_salable_qty?:  number;
    search_offer?:         SearchOffer | null;
    product_url?:          string;
    oos?:                  boolean;
    _tags?:                string[];
}

export interface HighlightResult {
    query?:             Description;
    title?:             Description;
    inventory?:         HighlightResultInventory;
    brand?:             HighlightResultBrand;
    description?:       Description;
    short_description?: Description;
    categories?:        CategoryElement[];
    description_ar?:    Description;
    title_ar?:          Description;
}

export interface HighlightResultBrand {
    name:         Description;
    description?: Description;
}

export interface Description {
    value:             string;
    matchLevel:        MatchLevel;
    fullyHighlighted?: boolean;
    matchedWords:      Query[];
}

export enum MatchLevel {
    Full = "full",
    None = "none",
}

export enum Query {
    S = "s",
}

export interface CategoryElement {
    name:         Description;
    description?: Description;
    name_ar?:     Description;
}

export interface HighlightResultInventory {
    sku: Description;
}

export interface Availability {
    instant:  Express;
    express:  Express;
    standard: Express;
}

export interface Express {
    is_available: boolean;
    qty:          number;
    store_code:   string | null;
}

// export enum StoreCode {
//     Ecom = "ECOM",
// }

export interface CategoryClass {
    _id?:                  string;
    id:                    string;
    name:                  string;
    name_ar?:              null | string;
    slug:                  string;
    description?:          null | string;
    description_ar?:       null;
    active?:               boolean;
    featured?:             boolean;
    images?:               BrandImages;
    seo?:                  SEO;
    updated_at?:           Date;
    created_at?:           Date;
    short_description?:    string;
    short_description_ar?: null;
    brand_url?:            string;
    visibility?:           number;
    parent_id?:            string;
    short_title?:          null;
    short_title_ar?:       null;
}

export interface BrandImages {
    logo:   null | string;
    banner: null | string;
}

export interface SEO {
    seo_title:          null | string;
    seo_description:    null | string;
    seo_title_ar:       null | string;
    seo_description_ar: null | string;
}

export interface SearchCategory {
    _id:            string;
    id:             string;
    name:           string;
    active:         boolean;
    parent_id:      string;
    updated_at:     Date;
    created_at:     Date;
    description:    null;
    description_ar: null;
    images:         BrandImages;
    name_ar:        null;
    seo:            SEO;
}

export interface Collection {
    _id?:         string;
    id:           string;
    name:         string;
    name_ar?:     null | string;
    active?:      boolean;
    images?:      BrandImages;
    seo?:         SEO;
    parent_id?:   null | string;
    updated_at?:  Date;
    created_at?:  Date;
    slug:         string;
    type?:        null;
    description?: null;
}

export interface HitImages {
    featured_image: string;
    other_images:   any[];
    gallery_images: GalleryImage[];
}

export interface GalleryImage {
    image:     string;
    thumbnail: string;
    medium:    string;
    full:      string;
}

export interface HitInventory {
    sku:      string;
    quantity: null;
    upc:      string;
}

export interface Label {
    _id:            string;
    id:             string;
    label_text:     string;
    icon_type:      string;
    color_code:     string;
    active:         boolean;
    seo:            SEO;
    updated_at:     Date;
    created_at:     Date;
    sub_label_text: null | string;
    visibility:     null;
    end_time?:      string;
    start_time?:    string;
}

export interface Option {
    key:   string;
    value: string;
    order: number;
}

export interface PriceElement {
    country_code: CountryCode;
    currency:     Currency;
    price:        PricePrice;
}

export enum CountryCode {
    AE = "ae",
    Om = "om",
    Sa = "sa",
}

export enum Currency {
    Aed = "AED",
    OMR = "OMR",
    Sar = "SAR",
}

export interface PricePrice {
    offer_price:   number;
    regular_price: number;
    member_price:  number;
}

export interface Products {
    exact_nb_hits: number;
    facets:        Facets;
}

export interface Facets {
    exact_matches: RenderingContent;
    analytics:     RenderingContent;
}

export interface SearchOffer {
    type:   string;
    label:  string;
    prices: PriceElement[];
}

export enum TaxRate {
    Vat0 = "VAT0%",
    Vat5 = "VAT5%",
}

export enum Type {
    Otc = "otc",
}

export enum Unit {
    Each = "Each",
}

export interface ProcessingTimingsMS {
    _request:    Request;
    extensions?: number;
    total:       number;
    afterFetch?: AfterFetch;
    fetch?:      Fetch;
}

export interface Request {
    roundTrip: number;
}

export interface AfterFetch {
    format: Format;
    total:  number;
}

export interface Format {
    highlighting: number;
    total:        number;
}

export interface Fetch {
    scanning: number;
    total:    number;
}
