import Page from "@pages/settings/admin/oAuth/index";
import { _generateMetadata } from "_app/_utils";

export const generateMetadata = async () =>
  await _generateMetadata(
    () => "OAuth",
    () => "Add new OAuth Clients"
  );

export default Page;
