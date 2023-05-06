/**
 * @interface Hotel
 * @description Data structure required for hotel objects
 */
export interface CreateHotel {
    user_id: number;
    hotel_name: string;
    address: string;
    location: string;
    qualify: number;
    state: boolean;
    rooms: string[] | null;
}

export interface Hotel extends CreateHotel {
    id: number;
}

/**
 * @interface Room
 * @description Data structure required for room objects
 */
export interface CreateRoom {
    hotel_id: number;
    price: number;
    taxes: number;
    room_type: string;
    reserved: boolean;
}

export interface Room extends CreateRoom {
    id: number;
    bookings?: number[] | null;
}