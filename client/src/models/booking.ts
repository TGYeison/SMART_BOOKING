export interface Booking {
    booking_id: string;
    user_id: string;
    hotel_id: string;
    room_id: string;
    user_name: string;
    date_admition: Date;
    date_departure: Date;
    people_number: number;
}