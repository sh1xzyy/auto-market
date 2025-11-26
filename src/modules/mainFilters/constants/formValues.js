const BASIC_FORM_VALUES = {
  brand: "",
  model: "",
  price_until: "",
  location: "",
};

export const CAR_FORM_VALUES = {
  ...BASIC_FORM_VALUES,
  mileage: "",
  payment_method: "buy",
  year: "",
  isElectro: false,
};

export const MOTORCYCLE_FORM_VALUES = {
  ...BASIC_FORM_VALUES,
  category: "",
  mileage: "",
  year: "",
};

export const E_BIKE_FORM_VALUES = {
  ...BASIC_FORM_VALUES,
  category: "",
  frame_size: "",
  battery_capacity: "",
};

export const VAN_FORM_VALUES = {
  ...BASIC_FORM_VALUES,
  category: "",
  mileage: "",
  year: "",
};
