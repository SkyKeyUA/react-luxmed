import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addOrthoUser = createAsyncThunk('user/addUser', async (values) => {
  return fetch('YOUR_API_LINK', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      personal: {
        firstName: values.firstName,
        lastName: values.lastName,
        position: values.position,
        practitioners: values.practitioners,
        locations: values.locations,
        website: values.website,
      },
      clinic: {
        clinicName: values.clinicName,
        clinicAddress: values.clinicAddress,
        clinicCity: values.clinicCity,
        clinicZip: values.clinicZip,
        clinicEmail: values.clinicEmail,

        languages: values.languages,
        phone: values.phone,
        headPractitioner: values.headPractitioner,

        officeManagerName: values.officeManagerName,
        officeManagerEmail: values.officeManagerEmail,
        officeManagerPhone: values.officeManagerPhone,

        purchManagementName: values.purchManagementName,
        purchManagementEmail: values.purchManagementEmail,
        purchManagementPhone: values.purchManagementPhone,
      },
      questionnaire: {
        shareAppointment: values.shareAppointment,
        specialAvailability: values.specialAvailability,
        referrals: values.referrals,
        injectableTreatments: values.injectableTreatments,
        telemedicineConsulting: values.telemedicineConsulting,
      },
      products: {
        category: values.orthopedics,
        items: values.items,
        medicalBraces: values.medicalBraces,
        mbBrand: values.mbBrand,
        otherProducts: values.otherProducts,
        opDetails: values.opDetails,
      },
    }),
  }).then((res) => res.json());
});

const orthoMedicineFormSlice = createSlice({
  name: 'orthoCustomerData',
  initialState: {
    isLoading: false,
    orthoFormData: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(addOrthoUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addOrthoUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orthoFormData = action.payload;
    });
    builder.addCase(addOrthoUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default orthoMedicineFormSlice.reducer;
