export interface Patient {
  id: number;
  name: string;
  gender: string;
  date_of_birth: string;
}

export interface Note {
  id: number;
  provider_name: string;
  hospital_name: string;
  created_at: string;
  patient_id: number;
  text: string;
}

//complete patient data - interface
export interface Patient {
  id: number;
  name: string;
  gender: string;
  age: number;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}