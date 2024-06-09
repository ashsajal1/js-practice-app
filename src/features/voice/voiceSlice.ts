import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface VoiceState {
  voice: string | null;
}

const initialState: VoiceState = {
  voice: null,
};

const voiceSlice = createSlice({
  name: 'voice',
  initialState,
  reducers: {
    setVoice: (state, action: PayloadAction<string>) => {
      state.voice = action.payload;
    },
  },
});

export const { setVoice } = voiceSlice.actions;
export default voiceSlice.reducer;
