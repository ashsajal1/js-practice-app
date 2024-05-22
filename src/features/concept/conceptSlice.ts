import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QnaTypes } from "../../lib/qna";
import { generateRandomConcepts } from "../../lib/random";

export interface ConceptState {
  concepts: QnaTypes[];
  currentConcept: QnaTypes | null;
}

const initialState: ConceptState = {
  concepts: [],
  currentConcept: null,
};

const conceptSlice = createSlice({
  name: "concept",
  initialState,
  reducers: {
    getRandomConcepts: (state) => {
      const randomConcepts = generateRandomConcepts();
      state.concepts = randomConcepts;
    },
    getConceptById: (state, action: PayloadAction<string>) => {
      const conceptId = action.payload;
      const foundConcept = generateRandomConcepts().find((concept) => concept.id.toString() === conceptId.toString());
      state.currentConcept = foundConcept || null;
    },
  },
});

export const { getRandomConcepts, getConceptById } = conceptSlice.actions;

export default conceptSlice.reducer;
