import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { WiselyTestAPIContext } from "./wiselyTestAPIContext";
import {
  WiselyTestAPIOptionalParams,
  CreateInventoryDto,
  WiselyTestAPICreateInventoryResponse,
  WiselyTestAPIGetRestaurantsResponse,
  CreateRestaurantDto,
  WiselyTestAPICreateRestaurantResponse,
  WiselyTestAPIGetRestaurantByIdResponse,
  CreateReservationDto,
  WiselyTestAPICreateReservationResponse
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

  /**
   * Create a reservation
   * @param inventoryId
   * @param body
   * @param options The options parameters.
   */
  createReservation(
    inventoryId: number,
    body: CreateReservationDto,
    options?: coreHttp.OperationOptions
  ): Promise<WiselyTestAPICreateReservationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { inventoryId, body, options: operationOptions },
      createReservationOperationSpec
    ) as Promise<WiselyTestAPICreateReservationResponse>;
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
  requestBody: Parameters.body1,
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
const createReservationOperationSpec: coreHttp.OperationSpec = {
  path: "/api/inventories/{inventoryId}/reservations",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Reservation
    }
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host, Parameters.inventoryId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
