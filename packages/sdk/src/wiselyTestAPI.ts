import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { WiselyTestAPIContext } from "./wiselyTestAPIContext";
import {
  WiselyTestAPIOptionalParams,
  CreateInventoryDto,
  WiselyTestAPICreateInventoryResponse,
  WiselyTestAPIGetInventoryByDateResponse,
  WiselyTestAPIGetReservationsByDateResponse,
  CreateReservationDto,
  WiselyTestAPICreateReservationResponse,
  WiselyTestAPIGetRestaurantsResponse,
  CreateRestaurantDto,
  WiselyTestAPICreateRestaurantResponse,
  WiselyTestAPIGetRestaurantByIdResponse
} from "./models";

export class WiselyTestAPI extends WiselyTestAPIContext {
  /**
   * Initializes a new instance of the WiselyTestAPI class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: WiselyTestAPIOptionalParams) {
    super($host, options);
  }

  /**
   * @param restaurantId
   * @param body
   * @param options The options parameters.
   */
  createInventory(
    restaurantId: number,
    body: CreateInventoryDto,
    options?: coreHttp.OperationOptions
  ): Promise<WiselyTestAPICreateInventoryResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { restaurantId, body, options: operationOptions },
      createInventoryOperationSpec
    ) as Promise<WiselyTestAPICreateInventoryResponse>;
  }

  /**
   * @param restaurantId
   * @param dateParam
   * @param options The options parameters.
   */
  getInventoryByDate(
    restaurantId: number,
    dateParam: Date,
    options?: coreHttp.OperationOptions
  ): Promise<WiselyTestAPIGetInventoryByDateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { restaurantId, dateParam, options: operationOptions },
      getInventoryByDateOperationSpec
    ) as Promise<WiselyTestAPIGetInventoryByDateResponse>;
  }

  /**
   * @param restaurantId
   * @param dateParam
   * @param options The options parameters.
   */
  getReservationsByDate(
    restaurantId: number,
    dateParam: Date,
    options?: coreHttp.OperationOptions
  ): Promise<WiselyTestAPIGetReservationsByDateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { restaurantId, dateParam, options: operationOptions },
      getReservationsByDateOperationSpec
    ) as Promise<WiselyTestAPIGetReservationsByDateResponse>;
  }

  /**
   * @param restaurantId
   * @param body
   * @param options The options parameters.
   */
  createReservation(
    restaurantId: number,
    body: CreateReservationDto,
    options?: coreHttp.OperationOptions
  ): Promise<WiselyTestAPICreateReservationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { restaurantId, body, options: operationOptions },
      createReservationOperationSpec
    ) as Promise<WiselyTestAPICreateReservationResponse>;
  }

  /**
   * Get list of restaurants
   * @param options The options parameters.
   */
  getRestaurants(
    options?: coreHttp.OperationOptions
  ): Promise<WiselyTestAPIGetRestaurantsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      getRestaurantsOperationSpec
    ) as Promise<WiselyTestAPIGetRestaurantsResponse>;
  }

  /**
   * Create a restaurant
   * @param body
   * @param options The options parameters.
   */
  createRestaurant(
    body: CreateRestaurantDto,
    options?: coreHttp.OperationOptions
  ): Promise<WiselyTestAPICreateRestaurantResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { body, options: operationOptions },
      createRestaurantOperationSpec
    ) as Promise<WiselyTestAPICreateRestaurantResponse>;
  }

  /**
   * Get a restaurant by ID
   * @param restaurantId
   * @param options The options parameters.
   */
  getRestaurantById(
    restaurantId: number,
    options?: coreHttp.OperationOptions
  ): Promise<WiselyTestAPIGetRestaurantByIdResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { restaurantId, options: operationOptions },
      getRestaurantByIdOperationSpec
    ) as Promise<WiselyTestAPIGetRestaurantByIdResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createInventoryOperationSpec: coreHttp.OperationSpec = {
  path: "/api/restaurants/{restaurantId}/inventories",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Inventory" } }
        }
      }
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host, Parameters.restaurantId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getInventoryByDateOperationSpec: coreHttp.OperationSpec = {
  path: "/api/restaurants/{restaurantId}/inventories",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Inventory" } }
        }
      }
    }
  },
  queryParameters: [Parameters.dateParam],
  urlParameters: [Parameters.$host, Parameters.restaurantId],
  headerParameters: [Parameters.accept1],
  serializer
};
const getReservationsByDateOperationSpec: coreHttp.OperationSpec = {
  path: "/api/restaurants/{restaurantId}/reservations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Reservation" } }
        }
      }
    }
  },
  queryParameters: [Parameters.dateParam],
  urlParameters: [Parameters.$host, Parameters.restaurantId],
  headerParameters: [Parameters.accept1],
  serializer
};
const createReservationOperationSpec: coreHttp.OperationSpec = {
  path: "/api/restaurants/{restaurantId}/reservations",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Reservation
    }
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.restaurantId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getRestaurantsOperationSpec: coreHttp.OperationSpec = {
  path: "/api/restaurants",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Restaurant" } }
        }
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer
};
const createRestaurantOperationSpec: coreHttp.OperationSpec = {
  path: "/api/restaurants",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Restaurant
    }
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getRestaurantByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/api/restaurants/{restaurantId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Restaurant
    }
  },
  urlParameters: [Parameters.$host, Parameters.restaurantId],
  headerParameters: [Parameters.accept1],
  serializer
};
