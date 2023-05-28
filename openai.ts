import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-WDSl9Kre2ml4en7He1NLfJ82",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;