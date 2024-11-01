import Reservation from "../models/reservation.js";

export const reserve = async (reservationData) => {
  const reservation = new Reservation(reservationData);
  await reservation.save();
  return reservation;
};
export const getReservationHistory = async (userId) => {
  const reservations = await Reservation.find({ userId });
  return reservations;
};
