import { Command as $Command } from "https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts";
import { MetadataBearer as __MetadataBearer } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { GetObjectLegalHoldOutput, GetObjectLegalHoldRequest } from "../models/models_0.d.ts";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client.d.ts";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetObjectLegalHoldCommand}.
 */
export interface GetObjectLegalHoldCommandInput extends GetObjectLegalHoldRequest {
}
/**
 * @public
 *
 * The output of {@link GetObjectLegalHoldCommand}.
 */
export interface GetObjectLegalHoldCommandOutput extends GetObjectLegalHoldOutput, __MetadataBearer {
}
declare const GetObjectLegalHoldCommand_base: {
    new (input: GetObjectLegalHoldCommandInput): import("https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts").CommandImpl<GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput, S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("https://esm.sh/v135/@smithy/middleware-endpoint@2.4.1/dist-types/index.d.ts").EndpointParameterInstructions;
};
/**
 * @public
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Gets an object's current legal hold status. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking
 *          Objects</a>.</p>
 *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
 *          <p>The following action is related to <code>GetObjectLegalHold</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectLegalHoldCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectLegalHoldCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetObjectLegalHoldRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetObjectLegalHoldCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectLegalHoldOutput
 * //   LegalHold: { // ObjectLockLegalHold
 * //     Status: "ON" || "OFF",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetObjectLegalHoldCommandInput - {@link GetObjectLegalHoldCommandInput}
 * @returns {@link GetObjectLegalHoldCommandOutput}
 * @see {@link GetObjectLegalHoldCommandInput} for command's `input` shape.
 * @see {@link GetObjectLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export declare class GetObjectLegalHoldCommand extends GetObjectLegalHoldCommand_base {
}
