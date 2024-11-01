import Vehicle from "../models/vehicle.js";

export const listVehicles = async (query) => {
  const vehicles = await Vehicle.find(query);
  return vehicles;
};
export const addVehicle = async (vehicleData) => {
  const vehicle = new Vehicle(vehicleData);
  await vehicle.save();
  return vehicle;
};
export const editVehicle = async (id, vehicleData) => {
  return await Vehicle.findByIdAndUpdate(id, vehicleData, { new: true });
};
