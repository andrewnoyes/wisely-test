import * as coreHttp from "@azure/core-http";

export const CreateInventoryDto: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateInventoryDto",
    modelProperties: {
      startTime: {
        serializedName: "startTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "DateTime"
        }
      },
      dates: {
        serializedName: "dates",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      reservationLimit: {
        serializedName: "reservationLimit",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Inventory: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Inventory",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Number"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      updated: {
        serializedName: "updated",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      reservationLimit: {
        serializedName: "reservationLimit",
        required: true,
        type: {
          name: "Number"
        }
      },
      time: {
        serializedName: "time",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      date: {
        serializedName: "date",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      restaurantId: {
        serializedName: "restaurantId",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Reservation: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Reservation",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Number"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      updated: {
        serializedName: "updated",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        required: true,
        type: {
          name: "String"
        }
      },
      partySize: {
        serializedName: "partySize",
        required: true,
        type: {
          name: "Number"
        }
      },
      inventoryId: {
        serializedName: "inventoryId",
        required: true,
        type: {
          name: "Number"
        }
      },
      inventory: {
        serializedName: "inventory",
        type: {
          name: "Composite",
          className: "Inventory"
        }
      }
    }
  }
};

export const CreateReservationDto: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateReservationDto",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        required: true,
        type: {
          name: "String"
        }
      },
      partySize: {
        serializedName: "partySize",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Restaurant: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Restaurant",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Number"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      updated: {
        serializedName: "updated",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateRestaurantDto: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateRestaurantDto",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
