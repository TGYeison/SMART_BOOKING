/**
 * @interface Hotel
 * @description Data structure required for hotel objects
 */
export interface CreateHotel {
    user_id: string;
    hotel_name: string;
    address: string;
    location: string;
    qualify: number;
    state: boolean;
    rooms: string[] | null;
}

export interface Hotel extends CreateHotel {
    hotel_id: string;
}

/**
 * @interface Room
 * @description Data structure required for room objects
 */
export interface CreateRoom {
    hotel_id: string;
    room_id: string;
    price: number;
    taxes: number;
    room_type: string;
    reserved: boolean;
}

export interface Room extends CreateRoom {
    room_id: string;
    bookings?: string[] | null;
}