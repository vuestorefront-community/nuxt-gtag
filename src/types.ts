export type RouteLocationNormalized = any;

declare global {
  interface Window {
    gtag: Gtag;
  }
}

interface Gtag {
  (
    command: 'config',
    targetId: string,
    config?: ControlParams | EventParams | Record<string, unknown>,
  ): void;

  (command: 'set', config: Record<string, unknown>): void;

  (command: 'js', config: Date): void;

  (
    command: 'event',
    eventName: GtagEventsName | string,
    eventParams?: ControlParams | EventParams | Record<string, unknown>,
  ): void;
}

export type ControlParams = Partial<{
  eventCallback: () => void;
  eventTimeout: number;
  groups: string | string[];
  sendTo: string | string[];
}>;

export type GtagEventsName =
  | 'add_payment_info'
  | 'add_shipping_info'
  | 'add_to_cart'
  | 'add_to_wishlist'
  | 'begin_checkout'
  | 'earn_virtual_currency'
  | 'exception'
  | 'generate_lead'
  | 'join_group'
  | 'level_end'
  | 'level_start'
  | 'level_up'
  | 'login'
  | 'page_view'
  | 'post_score'
  | 'purchase'
  | 'refund'
  | 'remove_from_cart'
  | 'search'
  | 'select_content'
  | 'select_item'
  | 'select_promotion'
  | 'share'
  | 'sign_up'
  | 'spend_virtual_currency'
  | 'tutorial_begin'
  | 'tutorial_complete'
  | 'unlock_achievement'
  | 'view_cart'
  | 'view_item'
  | 'view_item_list'
  | 'view_promotion'
  | 'view_search_results';

export enum GtagEvents {
  addPaymentInfo = 'add_payment_info',
  addShippingInfo = 'add_shipping_info',
  addToCart = 'add_to_cart',
  addToWishlist = 'add_to_wishlist',
  beginCheckout = 'begin_checkout',
  earnVirtualCurrency = 'earn_virtual_currency',
  exception = 'exception',
  generateLead = 'generate_lead',
  joinGroup = 'join_group',
  levelEnd = 'level_end',
  levelStart = 'level_start',
  levelUp = 'level_up',
  login = 'login',
  pageView = 'page_view',
  postScore = 'post_score',
  purchase = 'purchase',
  refund = 'refund',
  removeFromCart = 'remove_from_cart',
  search = 'search',
  selectContent = 'select_content',
  selectItem = 'select_item',
  selectPromotion = 'select_promotion',
  share = 'share',
  signUp = 'sign_up',
  spendVirtualCurrency = 'spend_virtual_currency',
  tutorialBegin = 'tutorial_begin',
  tutorialComplete = 'tutorial_complete',
  unlockAchievement = 'unlock_achievement',
  viewCart = 'view_cart',
  viewItem = 'view_item',
  viewItemList = 'view_item_list',
  viewPromotion = 'view_promotion',
  viewSearchResults = 'view_search_results',
}

export type EventParams = Partial<{
  sendTo: string | string[] | null;
  value: number;
}>;

export type Currency = string | number;

export type Item = {
  itemId: string;
  itemName: string;
} & Partial<{
  affiliation: string;
  brand: string;
  category: string;
  coupon: string;
  creativeName: string;
  creativeSlot: string;
  currency: Currency;
  discount: Currency;
  index: number;
  itemBrand: string;
  itemCategory2: string;
  itemCategory3: string;
  itemCategory4: string;
  itemCategory5: string;
  itemCategory: string;
  itemListId: string;
  itemListName: string;
  itemVariant: string;
  locationId: string;
  price: Currency;
  promotionId: string;
  promotionName: string;
  quantity: number;
}>;

export type Promotion = Partial<{
  creativeName: string;
  creativeSlot: string;
  id: string;
  name: string;
}>;

export type AddPaymentInfoParams = {
  coupon?: string;
  currency: Currency;
  items: Item[];
  paymentType?: string;
  value: number;
};

export type AddShippingInfoParams = {
  coupon?: string;
  currency: Currency;
  items: Item[];
  shippingTier?: string;
  value: number;
};

export type AddToCartParams = {
  currency: Currency;
  items: Item[];
  value: number;
};

export type AddToWishlistParams = {
  currency: Currency;
  items: Item[];
  value: number;
};

export type BeginCheckoutParams = {
  coupon?: string;
  currency: Currency;
  items: Item[];
  value: number;
};

export type EarnVirtualCurrencyParams = {
  value: number;
  virtualCurrencyName: string;
};

export type ExceptionParams = Partial<{
  description: string;
  fatal: boolean;
}>;

export type GenerateLeadParams = {
  currency: Currency;
  value: number;
};

export type JoinGroupParams = {
  groupId?: string;
};

export type LevelEndParams = {
  levelName?: string;
  success?: boolean;
};

export type LevelStartParams = {
  levelName?: string;
};

export type LevelUpParams = {
  level?: number;
  character?: string;
};

export type LoginParams = {
  method?: string;
};

export type PageViewRouteParams = Partial<{
  fullPath: string;
  name: string;
  pagePath: string;
  path: string;
  sendPageView: boolean | null;
}>;

export type PageViewParams = Partial<{
  clientId: string;
  language: string;
  pageEncoding: string;
  pageLocation: string | null;
  pageTitle: string;
  userAgent: string;
  sendPageView: boolean | null;
}>;

export type PostScoreParams = {
  character?: string;
  level?: number;
  score: number;
};

export type PurchaseParams = {
  affiliation?: string;
  coupon?: string;
  currency: Currency;
  items: Item[];
  shipping?: number;
  tax?: number;
  transactionId: string;
  value: number;
};

export type RefundParams = {
  affiliation?: string;
  coupon?: string;
  currency: Currency;
  items: Item[];
  shipping?: number;
  tax?: number;
  transactionId: string;
  value: number;
};

export type RemoveFromCartParams = {
  currency: Currency;
  value: number;
  items: Item[];
};

export type SearchParams = {
  searchTerm: string;
};

export type SelectContentParams = {
  contentType?: string;
  itemId?: string;
};

export type SelectItemParams = {
  itemListId?: string;
  itemListName?: string;
  items: Item[];
};

export type SelectPromotionParams = {
  creativeName?: string;
  creativeSlot?: string;
  locationId?: string;
  promotionId?: string;
  promotionName?: string;
  items?: Item[];
};

export type ShareParams = {
  method?: string;
  contentType?: string;
  itemId?: string;
};

export type SignUpParams = {
  method?: string;
};

export type SpendVirtualCurrencyParams = {
  value: number;
  virtualCurrencyName: string;
  itemName?: string;
};

export type TutorialBeginParams = undefined;
export type TutorialCompleteParams = undefined;

export type UnlockAchievementParams = {
  achievementId: string;
};

export type ViewCartParams = {
  currency: Currency;
  value: number;
  items: Item[];
};

export type ViewItemParams = {
  currency: Currency;
  value: number;
  items: Item[];
};

export type ViewItemListParams = {
  itemListId?: string;
  itemListName?: string;
  items: Item[];
};

export type ViewPromotionParams = {
  creativeName?: string;
  creativeSlot?: string;
  locationId?: string;
  promotionId?: string;
  promotionName?: string;
  items: Item[];
};

export type ViewSearchResultParams = {
  searchTerm?: string;
  items: Item[];
};

export type EventFunctions = {
  [GtagEvents.addPaymentInfo]: AddPaymentInfoParams;
  [GtagEvents.addShippingInfo]: AddShippingInfoParams;
  [GtagEvents.addToCart]: AddToCartParams;
  [GtagEvents.addToWishlist]: AddToWishlistParams;
  [GtagEvents.beginCheckout]: BeginCheckoutParams;
  [GtagEvents.earnVirtualCurrency]: EarnVirtualCurrencyParams;
  [GtagEvents.exception]: ExceptionParams;
  [GtagEvents.generateLead]: GenerateLeadParams;
  [GtagEvents.joinGroup]: JoinGroupParams;
  [GtagEvents.levelEnd]: LevelEndParams;
  [GtagEvents.levelStart]: LevelStartParams;
  [GtagEvents.levelUp]: LevelUpParams;
  [GtagEvents.login]: LoginParams;
  [GtagEvents.pageView]: PageViewParams;
  [GtagEvents.postScore]: PostScoreParams;
  [GtagEvents.purchase]: PurchaseParams;
  [GtagEvents.refund]: RefundParams;
  [GtagEvents.removeFromCart]: RemoveFromCartParams;
  [GtagEvents.search]: SearchParams;
  [GtagEvents.selectContent]: SelectContentParams;
  [GtagEvents.selectItem]: SelectItemParams;
  [GtagEvents.selectPromotion]: SelectPromotionParams;
  [GtagEvents.share]: ShareParams;
  [GtagEvents.signUp]: SignUpParams;
  [GtagEvents.spendVirtualCurrency]: SpendVirtualCurrencyParams;
  [GtagEvents.tutorialBegin]: TutorialBeginParams;
  [GtagEvents.tutorialComplete]: TutorialCompleteParams;
  [GtagEvents.unlockAchievement]: UnlockAchievementParams;
  [GtagEvents.viewCart]: ViewCartParams;
  [GtagEvents.viewItem]: ViewItemParams;
  [GtagEvents.viewItemList]: ViewItemListParams;
  [GtagEvents.viewPromotion]: ViewPromotionParams;
  [GtagEvents.viewSearchResults]: ViewSearchResultParams;
};

export type EventFunctionsName = keyof EventFunctions;

export type QueryParams = Array<
  | string
  | ControlParams
  | EventParams
  | Record<string, unknown>
  | AddPaymentInfoParams
  | AddShippingInfoParams
  | AddToCartParams
  | AddToWishlistParams
  | BeginCheckoutParams
  | EarnVirtualCurrencyParams
  | ExceptionParams
  | GenerateLeadParams
  | JoinGroupParams
  | LevelEndParams
  | LevelStartParams
  | LevelUpParams
  | LoginParams
  | PageViewParams
  | PostScoreParams
  | PurchaseParams
  | RefundParams
  | RemoveFromCartParams
  | SearchParams
  | SelectContentParams
  | SelectItemParams
  | SelectPromotionParams
  | ShareParams
  | SignUpParams
  | SpendVirtualCurrencyParams
  | TutorialBeginParams
  | TutorialCompleteParams
  | UnlockAchievementParams
  | ViewCartParams
  | ViewItemParams
  | ViewItemListParams
  | ViewPromotionParams
  | ViewSearchResultParams
  | Date
>;

export type Options = Partial<{
  bootstrap: boolean;
  config: Partial<{
    id: string;
    params: ControlParams | EventParams | Record<string, unknown>;
  }>;
  customPreConnectOrigin: string;
  customResourceURL: string;
  debug: boolean;
  defaultGroupName: string;
  deferScriptLoad: boolean;
  disableScriptLoad: boolean;
  enabled: boolean;
  dataLayerName: string;
  includes: Partial<{
    id: string;
    params: ControlParams | EventParams | Record<string, unknown>;
  }>[];
  onAfterTrack: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
  ) => undefined;
  onBeforeTrack: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
  ) => undefined;
  pageViewExcludedRoutes: Array<
    | Record<string, unknown>
    | string
    | Partial<{
        path: string;
        name: string;
        [key: string]: unknown;
      }>
    | RouteLocationNormalized
  >;
  pageViewPrependBase: boolean;
  pageViewScreenViewEnabled: boolean;
  pageViewSkipSamePath: boolean;
  pageViewTemplate: (
    to: RouteLocationNormalized,
    from?: RouteLocationNormalized,
  ) => RouteLocationNormalized;
  pageViewTracker: boolean;
  pageViewUseFullPath: boolean;
}>;
