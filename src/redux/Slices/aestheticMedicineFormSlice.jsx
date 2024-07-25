import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addAestheticUser = createAsyncThunk(
  'user/addUser',
  async (values) => {
    return fetch('YOUR_API_LINK', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
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
          skincareCreams: values.skincareCreams,
          scBrand: values.scBrand,
          otherProducts: values.otherProducts,
          opDetails: values.opDetails,
        },
      }),
    }).then((res) => res.json());
  }
);

const aestheticMedicineFormSlice = createSlice({
  name: 'eastheticCustomerData',
  initialState: {
    isLoading: false,
    aesthFormData: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(addAestheticUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addAestheticUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.aesthFormData = action.payload;
    });
    builder.addCase(addAestheticUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default aestheticMedicineFormSlice.reducer;
