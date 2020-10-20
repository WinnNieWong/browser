import { DataMatrixReader } from '@zxing/library';
import { BrowserCodeReader } from './BrowserCodeReader';

/**
 * QR Code reader to use from browser.
 */
export class BrowserDatamatrixCodeReader extends BrowserCodeReader {
    /**
     * Creates an instance of BrowserQRCodeReader.
     * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
     */
    public constructor(timeBetweenScansMillis: number = 500) {
        super(new DataMatrixReader(), timeBetweenScansMillis);
    }
}