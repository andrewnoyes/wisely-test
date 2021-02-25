import { OperationParameter, OperationURLParameter } from "@azure/core-http";
import {
  CreateInventoryDto as CreateInventoryDtoMapper,
  CreateRestaurantDto as CreateRestaurantDtoMapper,
  CreateReservationDto as CreateReservationDtoMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: CreateInventoryDtoMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const restaurantId: OperationURLParameter = {
  parameterPath: "restaurantId",
  mapper: {
    serializedName: "restaurantId",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: CreateRestaurantDtoMapper
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: CreateReservationDtoMapper
};

export const inventoryId: OperationURLParameter = {
  parameterPath: "inventoryId",
  mapper: {
    serializedName: "inventoryId",
    required: true,
    type: {
      name: "Number"
    }
  }
};
