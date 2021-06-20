export interface MLSearch {
  site_id:           SiteID;
  query:             string;
  paging:            Paging;
  results:           Result[];
  secondary_results: any[];
  related_results:   any[];
  sort:              Sort;
  available_sorts:   Sort[];
  filters:           Filter[];
  available_filters: AvailableFilter[];
}

export interface MLItem {
  id:                               string;
  site_id:                          string;
  title:                            string;
  subtitle:                         null;
  seller_id:                        number;
  category_id:                      string;
  official_store_id:                null;
  price:                            number;
  base_price:                       number;
  original_price:                   null;
  currency_id:                      string;
  initial_quantity:                 number;
  available_quantity:               number;
  sold_quantity:                    number;
  sale_terms:                       Attribute[];
  buying_mode:                      string;
  listing_type_id:                  string;
  start_time:                       Date;
  stop_time:                        Date;
  condition:                        string;
  permalink:                        string;
  thumbnail_id:                     string;
  thumbnail:                        string;
  secure_thumbnail:                 string;
  pictures:                         Picture[];
  video_id:                         null;
  descriptions:                     Description[];
  accepts_mercadopago:              boolean;
  non_mercado_pago_payment_methods: NonMercadoPagoPaymentMethod[];
  shipping:                         Shipping2;
  international_delivery_mode:      string;
  seller_address:                   SellerAddress2;
  seller_contact:                   null;
  location:                         Location;
  coverage_areas:                   any[];
  attributes:                       Attribute[];
  warnings:                         any[];
  listing_source:                   string;
  variations:                       any[];
  status:                           string;
  sub_status:                       any[];
  tags:                             string[];
  warranty:                         string;
  catalog_product_id:               string;
  domain_id:                        string;
  parent_item_id:                   null;
  differential_pricing:             null;
  deal_ids:                         any[];
  automatic_relist:                 boolean;
  date_created:                     Date;
  last_updated:                     Date;
  health:                           null;
  catalog_listing:                  boolean;
  channels:                         string[];
}

export interface MLItemDescription {
  text:         string;
  plain_text:   string;
  last_updated: Date;
  date_created: Date;
  snapshot:     Snapshot;
}

export interface MLCategory {
  id:                           string;
  name:                         string;
  picture:                      string;
  permalink:                    null;
  total_items_in_this_category: number;
  path_from_root:               Sort[];
  children_categories:          any[];
  attribute_types:              string;
  settings:                     Settings;
  channels_settings:            any[];
  meta_categ_id:                null;
  attributable:                 boolean;
  date_created:                 Date;
}

export interface Settings {
  adult_content:             boolean;
  buying_allowed:            boolean;
  buying_modes:              string[];
  catalog_domain:            string;
  coverage_areas:            string;
  currencies:                string[];
  fragile:                   boolean;
  immediate_payment:         string;
  item_conditions:           string[];
  items_reviews_allowed:     boolean;
  listing_allowed:           boolean;
  max_description_length:    number;
  max_pictures_per_item:     number;
  max_pictures_per_item_var: number;
  max_sub_title_length:      number;
  max_title_length:          number;
  maximum_price:             null;
  maximum_price_currency:    string;
  minimum_price:             number;
  minimum_price_currency:    string;
  mirror_category:           null;
  mirror_master_category:    null;
  mirror_slave_categories:   any[];
  price:                     string;
  reservation_allowed:       string;
  restrictions:              any[];
  rounded_address:           boolean;
  seller_contact:            string;
  shipping_modes:            string[];
  shipping_options:          string[];
  shipping_profile:          string;
  show_contact_information:  boolean;
  simple_shipping:           string;
  stock:                     string;
  sub_vertical:              string;
  subscribable:              boolean;
  tags:                      any[];
  vertical:                  string;
  vip_subdomain:             string;
  buyer_protection_programs: string[];
  status:                    string;
}

export interface AvailableFilter {
  id:     string;
  name:   string;
  type:   string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id:      string;
  name:    string;
  results: number;
}

export interface Sort {
  id:   null | string;
  name: string;
}

export interface Filter {
  id:     string;
  name:   string;
  type:   string;
  values: FilterValue[];
}

export interface FilterValue {
  id:             CategoryID;
  name:           string;
  path_from_root: Sort[];
}

export enum CategoryID {
  Mla1082 = "MLA1082",
}

export interface Paging {
  total:           number;
  primary_results: number;
  offset:          number;
  limit:           number;
}

export interface Result {
  id:                    string;
  site_id:               SiteID;
  title:                 string;
  seller:                Seller;
  price:                 number;
  prices:                Prices;
  sale_price:            null;
  currency_id:           CurrencyID;
  available_quantity:    number;
  sold_quantity:         number;
  buying_mode:           BuyingMode;
  listing_type_id:       ListingTypeID;
  stop_time:             Date;
  condition:             Condition;
  permalink:             string;
  thumbnail:             string;
  thumbnail_id:          string;
  accepts_mercadopago:   boolean;
  installments:          Installments;
  address:               Address;
  shipping:              Shipping;
  seller_address:        SellerAddress;
  attributes:            Attribute[];
  differential_pricing?: DifferentialPricing;
  original_price:        null;
  category_id:           CategoryID;
  official_store_id:     null;
  domain_id:             DomainID;
  catalog_product_id:    null | string;
  tags:                  ResultTag[];
  order_backend:         number;
  use_thumbnail_id:      boolean;
}

export interface Address {
  state_id:   StateID;
  state_name: StateName;
  city_id:    null | string;
  city_name:  string;
}

export enum StateID {
  ArB = "AR-B",
  ArC = "AR-C",
  ArM = "AR-M",
  ArS = "AR-S",
  ArT = "AR-T",
  ArX = "AR-X",
}

export enum StateName {
  BuenosAires = "Buenos Aires",
  CapitalFederal = "Capital Federal",
  Córdoba = "Córdoba",
  Mendoza = "Mendoza",
  SantaFe = "Santa Fe",
  Tucumán = "Tucumán",
}

export interface Attribute {
  id:                   string;
  name:                 string;
  value_id:             null | string;
  value_name:           ValueNameEnum;
  value_struct:         Struct | null;
  values:               AttributeValue[];
  attribute_group_id:   AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  source:               number;
}

export enum AttributeGroupID {
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Otros = "Otros",
}

export enum ID {
  CoatLength = "COAT_LENGTH",
  ItemCondition = "ITEM_CONDITION",
}

export enum PurpleName {
  CondiciónDelÍtem = "Condición del ítem",
  LargoDelPelaje = "Largo del pelaje",
}

export enum ValueNameEnum {
  Ambos = "ambos",
  Corto = "Corto",
  Largo = "Largo",
  Nuevo = "Nuevo",
  SemiLargo = "SemiLargo",
  Semilargo = "Semilargo",
  SinPelo = "Sin pelo",
  Usado = "Usado",
}

export interface AttributeValue {
  struct: null;
  source: number;
  id:     null | string;
  name:   ValueNameEnum;
}

export enum BuyingMode {
  BuyItNow = "buy_it_now",
}

export enum Condition {
  New = "new",
  Used = "used",
}

export enum CurrencyID {
  Ars = "ARS",
}

export interface DifferentialPricing {
  id: number;
}

export enum DomainID {
  MlaCats = "MLA-CATS",
}

export interface Installments {
  quantity:    number;
  amount:      number;
  rate:        number;
  currency_id: CurrencyID;
}

export enum ListingTypeID {
  GoldPro = "gold_pro",
  GoldSpecial = "gold_special",
}

export interface Prices {
  id:                    string;
  prices:                Price[];
  presentation:          Presentation;
  payment_method_prices: any[];
  reference_prices:      ReferencePrice[];
  purchase_discounts:    any[];
}

export interface Presentation {
  display_currency: CurrencyID;
}

export interface Price {
  id:                    string;
  type:                  Type;
  conditions:            Conditions;
  amount:                number;
  regular_amount:        null;
  currency_id:           CurrencyID;
  exchange_rate_context: ExchangeRateContext;
  metadata:              Metadata;
  last_updated:          Date;
}

export interface Conditions {
  context_restrictions: any[];
  start_time:           Date | null;
  end_time:             Date | null;
  eligible:             boolean;
}

export enum ExchangeRateContext {
  Default = "DEFAULT",
}

export interface Metadata {
}

export enum Type {
  Standard = "standard",
}

export interface ReferencePrice {
  id:                    string;
  type:                  string;
  conditions:            Conditions;
  amount:                number;
  currency_id:           CurrencyID;
  exchange_rate_context: ExchangeRateContext;
  tags:                  any[];
  last_updated:          Date;
}

export interface Seller {
  id:                 number;
  permalink:          string;
  registration_date:  Date;
  car_dealer:         boolean;
  real_estate_agency: boolean;
  tags:               SellerTag[];
  seller_reputation:  SellerReputation;
  eshop?:             Eshop;
}

export interface Eshop {
  nick_name:        string;
  eshop_rubro:      null;
  eshop_id:         number;
  eshop_locations:  any[];
  site_id:          SiteID;
  eshop_logo_url:   string;
  eshop_status_id:  number;
  seller:           number;
  eshop_experience: number;
}

export enum SiteID {
  Mla = "MLA",
}

export interface SellerReputation {
  transactions:        Transactions;
  power_seller_status: null | string;
  metrics:             Metrics;
  level_id:            LevelID | null;
}

export enum LevelID {
  The3_Yellow = "3_yellow",
  The4_LightGreen = "4_light_green",
  The5_Green = "5_green",
}

export interface Metrics {
  claims:                Cancellations;
  delayed_handling_time: Cancellations;
  sales:                 Sales;
  cancellations:         Cancellations;
}

export interface Cancellations {
  rate:   number;
  value:  number;
  period: CancellationsPeriod;
}

export enum CancellationsPeriod {
  The365Days = "365 days",
  The60Days = "60 days",
  The60Months = "60 months",
}

export interface Sales {
  period:    CancellationsPeriod;
  completed: number;
}

export interface Transactions {
  total:     number;
  canceled:  number;
  period:    TransactionsPeriod;
  ratings:   Ratings;
  completed: number;
}

export enum TransactionsPeriod {
  Historic = "historic",
}

export interface Ratings {
  negative: number;
  positive: number;
  neutral:  number;
}

export enum SellerTag {
  CreditsActiveBorrower = "credits_active_borrower",
  CreditsPriority1 = "credits_priority_1",
  CreditsPriority2 = "credits_priority_2",
  CreditsPriority3 = "credits_priority_3",
  CreditsPriority4 = "credits_priority_4",
  CreditsProfile = "credits_profile",
  Eshop = "eshop",
  FromFacebook = "from_facebook",
  MessagesAsBuyer = "messages_as_buyer",
  MessagesAsSeller = "messages_as_seller",
  Mshops = "mshops",
  Normal = "normal",
  UserInfoVerified = "user_info_verified",
}

export interface SellerAddress {
  id:           string;
  comment:      string;
  address_line: string;
  zip_code:     string;
  country:      Sort;
  state:        Sort;
  city:         Sort;
  latitude:     string;
  longitude:    string;
}

export interface Shipping {
  free_shipping: boolean;
  mode:          LogisticType;
  tags:          any[];
  logistic_type: LogisticType;
  store_pick_up: boolean;
}

export enum LogisticType {
  Custom = "custom",
  NotSpecified = "not_specified",
}

export enum ResultTag {
  DraggedBidsAndVisits = "dragged_bids_and_visits",
  GoodQualityPicture = "good_quality_picture",
  GoodQualityThumbnail = "good_quality_thumbnail",
  ImmediatePayment = "immediate_payment",
  LoyaltyDiscountEligible = "loyalty_discount_eligible",
}


export interface Struct {
  number: number;
  unit:   Unit;
}

export enum Unit {
  Días = "días",
  G = "g",
  Mm = "mm",
}

export interface Description {
  id: string;
}

export interface Location {
}

export interface NonMercadoPagoPaymentMethod {
  id:          string;
  description: string;
  type:        string;
}

export interface Picture {
  id:         string;
  url:        string;
  secure_url: string;
  size:       string;
  max_size:   string;
  quality:    string;
}

export interface SellerAddress2 {
  city:            City;
  state:           City;
  country:         City;
  search_location: SearchLocation;
  id:              number;
}

export interface City {
  id:   string;
  name: string;
}

export interface SearchLocation {
  neighborhood: City;
  city:         City;
  state:        City;
}

export interface Shipping2 {
  mode:          string;
  free_methods:  FreeMethod[];
  tags:          string[];
  dimensions:    null;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

export interface FreeMethod {
  id:   number;
  rule: Rule;
}

export interface Rule {
  default:            boolean;
  free_mode:          string;
  free_shipping_flag: boolean;
  value:              null;
}

export interface Snapshot {
  url:    string;
  width:  number;
  height: number;
  status: string;
}
