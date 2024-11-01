import { listVehicles, addVehicle } from "../services/vehicleService.js";

export const ListVehicles = async (req, res) => {
  try {
    const vehicles = await vehicleService.listVehicles(req.query);
    res.json(vehicles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const AddVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleService.addVehicle(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const EditVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleService.editVehicle(req.params.id, req.body);
    res.json(vehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
