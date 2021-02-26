import * as coreHttp from "@azure/core-http";

export interface CreateInventoryDto {
  startTime: Date;
  endTime?: Date;
  dates: string[];
  reservationLimit: number;
}

export interface Inventory {
  id: number;
  created: Date;
  updated: Date;
  reservationLimit: number;
  time: Date;
  date: Date;
  restaurantId: number;
}

export interface Reservation {
  id: number;
  created: Date;
  updated: Date;
  name: string;
  email: string;
  partySize: number;
  inventoryId: number;
  inventory: Inventory;
}

export interface CreateReservationDto {
  name: string;
  email: string;
  partySize: number;
}

export interface Restaurant {
  id: number;
  created: Date;
  updated: Date;
  name: string;
}

export interface CreateRestaurantDto {
  name: string;
}

/**
 * Contains response data for the createInventory operation.
 */
export type WiselyTestAPICreateInventoryResponse = Inventory[] & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Inventory[];
  };
};

/**
 * Contains response data for the getInventoryByDate operation.
 */
export type WiselyTestAPIGetInventoryByDateResponse = Inventory[] & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Inventory[];
  };
};

/**
 * Contains response data for the getReservations operation.
 */
export type WiselyTestAPIGetReservationsResponse = Reservation[] & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Reservation[];
  };
};

/**
 * Contains response data for the createReservation operation.
 */
export type WiselyTestAPICreateReservationResponse = Reservation & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Reservation;
  };
};

/**
 * Contains response data for the getRestaurants operation.
 */
export type WiselyTestAPIGetRestaurantsResponse = Restaurant[] & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Restaurant[];
  };
};

/**
 * Contains response data for the createRestaurant operation.
 */
export type WiselyTestAPICreateRestaurantResponse = Restaurant & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Restaurant;
  };
};

/**
 * Contains response data for the getRestaurantById operation.
 */
export type WiselyTestAPIGetRestaurantByIdResponse = Restaurant & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Restaurant;
  };
};

/**
 * Optional parameters.
 */
export interface WiselyTestAPIOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
