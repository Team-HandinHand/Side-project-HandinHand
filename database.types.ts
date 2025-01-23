export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      comments: {
        Row: {
          comment: string | null
          comment_id: string
          created_at: string
          movie_id: string
          rating: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          comment?: string | null
          comment_id?: string
          created_at?: string
          movie_id: string
          rating?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          comment?: string | null
          comment_id?: string
          created_at?: string
          movie_id?: string
          rating?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'comments_movie_id_fkey'
            columns: ['movie_id']
            isOneToOne: false
            referencedRelation: 'movieResults'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'comments_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['user_id']
          }
        ]
      }
      dramaResults: {
        Row: {
          adult: boolean
          backdrop_path: string | null
          first_air_date: string | null
          gemre_ids: Json | null
          'genre_ids/0': string | null
          'genre_ids/1': string | null
          'genre_ids/2': string | null
          'genre_ids/3': string | null
          'genre_ids/4': string | null
          id: number
          name: string | null
          origin_country_string: Json | null
          'origin_country/0': string | null
          'origin_country/1': string | null
          'origin_country/2': string | null
          original_language: string | null
          original_name: string | null
          overview: string | null
          popularity: number | null
          post_path: string | null
          poster_path: string | null
          vote_average: number | null
          vote_count: number | null
        }
        Insert: {
          adult: boolean
          backdrop_path?: string | null
          first_air_date?: string | null
          gemre_ids?: Json | null
          'genre_ids/0'?: string | null
          'genre_ids/1'?: string | null
          'genre_ids/2'?: string | null
          'genre_ids/3'?: string | null
          'genre_ids/4'?: string | null
          id: number
          name?: string | null
          origin_country_string?: Json | null
          'origin_country/0'?: string | null
          'origin_country/1'?: string | null
          'origin_country/2'?: string | null
          original_language?: string | null
          original_name?: string | null
          overview?: string | null
          popularity?: number | null
          post_path?: string | null
          poster_path?: string | null
          vote_average?: number | null
          vote_count?: number | null
        }
        Update: {
          adult?: boolean
          backdrop_path?: string | null
          first_air_date?: string | null
          gemre_ids?: Json | null
          'genre_ids/0'?: string | null
          'genre_ids/1'?: string | null
          'genre_ids/2'?: string | null
          'genre_ids/3'?: string | null
          'genre_ids/4'?: string | null
          id?: number
          name?: string | null
          origin_country_string?: Json | null
          'origin_country/0'?: string | null
          'origin_country/1'?: string | null
          'origin_country/2'?: string | null
          original_language?: string | null
          original_name?: string | null
          overview?: string | null
          popularity?: number | null
          post_path?: string | null
          poster_path?: string | null
          vote_average?: number | null
          vote_count?: number | null
        }
        Relationships: []
      }
      favorites: {
        Row: {
          created_at: string
          favorite_id: string
          movie_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          favorite_id?: string
          movie_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          favorite_id?: string
          movie_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'favorites_movie_id_fkey'
            columns: ['movie_id']
            isOneToOne: false
            referencedRelation: 'movieResults'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'favorites_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['user_id']
          }
        ]
      }
      gerne: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      movieResults: {
        Row: {
          adult: boolean | null
          backdrop_path: string | null
          belongs_to_collection: string | null
          budget: number | null
          'genre_ids/0': string | null
          'genre_ids/1': string | null
          'genre_ids/2': string | null
          'genre_ids/3': string | null
          genres: Json | null
          homepage: string | null
          id: string
          imdb_id: string | null
          origin_country: Json | null
          original_language: string | null
          original_title: string | null
          overview: string | null
          popularity: number | null
          poster_path: string | null
          production_companies: Json | null
          production_countries: Json | null
          release_date: string | null
          revenue: number | null
          runtime: number | null
          spoken_languages: Json | null
          status: string | null
          tagline: string | null
          title: string | null
          video: boolean | null
          vote_average: number | null
          vote_count: number | null
        }
        Insert: {
          adult?: boolean | null
          backdrop_path?: string | null
          belongs_to_collection?: string | null
          budget?: number | null
          'genre_ids/0'?: string | null
          'genre_ids/1'?: string | null
          'genre_ids/2'?: string | null
          'genre_ids/3'?: string | null
          genres?: Json | null
          homepage?: string | null
          id: string
          imdb_id?: string | null
          origin_country?: Json | null
          original_language?: string | null
          original_title?: string | null
          overview?: string | null
          popularity?: number | null
          poster_path?: string | null
          production_companies?: Json | null
          production_countries?: Json | null
          release_date?: string | null
          revenue?: number | null
          runtime?: number | null
          spoken_languages?: Json | null
          status?: string | null
          tagline?: string | null
          title?: string | null
          video?: boolean | null
          vote_average?: number | null
          vote_count?: number | null
        }
        Update: {
          adult?: boolean | null
          backdrop_path?: string | null
          belongs_to_collection?: string | null
          budget?: number | null
          'genre_ids/0'?: string | null
          'genre_ids/1'?: string | null
          'genre_ids/2'?: string | null
          'genre_ids/3'?: string | null
          genres?: Json | null
          homepage?: string | null
          id?: string
          imdb_id?: string | null
          origin_country?: Json | null
          original_language?: string | null
          original_title?: string | null
          overview?: string | null
          popularity?: number | null
          poster_path?: string | null
          production_companies?: Json | null
          production_countries?: Json | null
          release_date?: string | null
          revenue?: number | null
          runtime?: number | null
          spoken_languages?: Json | null
          status?: string | null
          tagline?: string | null
          title?: string | null
          video?: boolean | null
          vote_average?: number | null
          vote_count?: number | null
        }
        Relationships: []
      }
      movies: {
        Row: {
          page: number
          results: Json | null
          total_pages: number
          total_results: number | null
        }
        Insert: {
          page: number
          results?: Json | null
          total_pages: number
          total_results?: number | null
        }
        Update: {
          page?: number
          results?: Json | null
          total_pages?: number
          total_results?: number | null
        }
        Relationships: []
      }
      productionCompany: {
        Row: {
          id: number
          logo_path: string
          name: string | null
          origin_country: string | null
        }
        Insert: {
          id: number
          logo_path: string
          name?: string | null
          origin_country?: string | null
        }
        Update: {
          id?: number
          logo_path?: string
          name?: string | null
          origin_country?: string | null
        }
        Relationships: []
      }
      productionCountry: {
        Row: {
          iso_3166_1: string
          name: string
        }
        Insert: {
          iso_3166_1: string
          name?: string
        }
        Update: {
          iso_3166_1?: string
          name?: string
        }
        Relationships: []
      }
      spokenLanguage: {
        Row: {
          english_name: string
          iso_639_1: string
          name: string | null
        }
        Insert: {
          english_name: string
          iso_639_1: string
          name?: string | null
        }
        Update: {
          english_name?: string
          iso_639_1?: string
          name?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string
          nickname: string
          profile_picture_path: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          nickname: string
          profile_picture_path?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          nickname?: string
          profile_picture_path?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_user: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      get_favorites: {
        Args: {
          user_uuid: string
        }
        Returns: {
          id: string
          title: string
          poster_path: string
          release_date: string
          overview: string
          vote_average: number
        }[]
      }
      get_user_comments: {
        Args: {
          user_uuid: string
        }
        Returns: {
          comment_id: string
          movie_id: string
          comment: string
          rating: number
          created_at: string
          title: string
          poster_path: string
          overview: string
          release_date: string
          vote_average: number
        }[]
      }
      get_user_reviews: {
        Args: {
          user_uuid: string
        }
        Returns: {
          comment_id: string
          movie_id: string
          comment: string
          rating: number
          created_at: string
          updated_at: string
          title: string
          poster_path: string
          release_date: string
          overview: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never
