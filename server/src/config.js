/**
 * (C) Copyright IBM Corp. 2020.
 *
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 */

import dotenv from 'dotenv';
dotenv.config();

const incontact = {
  accessKeyId: process.env.INCONTACT_ACCESS_KEY_ID,
  accessKeySecret: process.env.INCONTACT_ACCESS_KEY_SECRET,
  accessKeyApiUri: process.env.INCONTACT_ACCESS_KEY_API_URI,
  apiUri: process.env.INCONTACT_API_URI,
  pointOfContact: process.env.INCONTACT_POINTOFCONTACT,
  skillId: process.env.INCONTACT_SKILL,
  version: process.env.INCONTACT_VERSION || 'v20.0',
}

const app = {
  port: process.env.PORT || 3000,
}

export default {incontact: incontact, app: app};