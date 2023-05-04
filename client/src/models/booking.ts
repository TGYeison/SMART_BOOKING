export interface Booking {
    id: number;
    user_id: number;
    hotel_id: number;
    room_id: number;
    user_name: string;
    date_admition: Date;
    date_departure: Date;
    people_number: number;
}