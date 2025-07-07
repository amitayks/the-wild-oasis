import { createClient } from "@supabase/supabase-js";

// Define Database schema types
export interface Database {
  public: {
    Tables: {
      cabins: {
        Row: {
          id: number;
          name: string;
          maxCapacity: number;
          regularPrice: number;
          discount: number;
          image: string;
          description: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          maxCapacity: number;
          regularPrice: number;
          discount?: number;
          image: string;
          description: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          maxCapacity?: number;
          regularPrice?: number;
          discount?: number;
          image?: string;
          description?: string;
          created_at?: string;
        };
      };
      bookings: {
        Row: {
          id: number;
          created_at: string;
          startDate: string;
          endDate: string;
          numNights: number;
          numGuests: number;
          cabinPrice: number;
          extrasPrice: number;
          totalPrice: number;
          status: string;
          hasBreakfast: boolean;
          isPaid: boolean;
          observations: string;
          cabinId: number;
          guestId: number;
        };
        Insert: {
          id?: number;
          created_at?: string;
          startDate: string;
          endDate: string;
          numNights: number;
          numGuests: number;
          cabinPrice: number;
          extrasPrice?: number;
          totalPrice: number;
          status?: string;
          hasBreakfast?: boolean;
          isPaid?: boolean;
          observations?: string;
          cabinId: number;
          guestId: number;
        };
        Update: {
          id?: number;
          created_at?: string;
          startDate?: string;
          endDate?: string;
          numNights?: number;
          numGuests?: number;
          cabinPrice?: number;
          extrasPrice?: number;
          totalPrice?: number;
          status?: string;
          hasBreakfast?: boolean;
          isPaid?: boolean;
          observations?: string;
          cabinId?: number;
          guestId?: number;
        };
      };
      guests: {
        Row: {
          id: number;
          fullName: string;
          email: string;
          nationality: string;
          countryFlag: string;
          nationalID: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          fullName: string;
          email: string;
          nationality: string;
          countryFlag: string;
          nationalID: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          fullName?: string;
          email?: string;
          nationality?: string;
          countryFlag?: string;
          nationalID?: string;
          created_at?: string;
        };
      };
      settings: {
        Row: {
          id: number;
          minBookingLength: number;
          maxBookingLength: number;
          maxGuestsPerBooking: number;
          breakfastPrice: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          minBookingLength: number;
          maxBookingLength: number;
          maxGuestsPerBooking: number;
          breakfastPrice: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          minBookingLength?: number;
          maxBookingLength?: number;
          maxGuestsPerBooking?: number;
          breakfastPrice?: number;
          created_at?: string;
        };
      };
    };
  };
}

export const supabaseUrl: string = "https://tvgfuvybatpoonhnwnqy.supabase.co";
const supabaseKey: string =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2Z2Z1dnliYXRwb29uaG53bnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NjE1MjksImV4cCI6MjA1MzEzNzUyOX0.G5ubgLmpSRfz55pfQ3l8BwI1UVAsXgzzNjYEo2NMtok";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
