import pdfjs from './pdfjs.js';

import Document from './Document.js';
import Outline from './Outline.js';
import Page from './Page.js';
import Thumbnail from './Thumbnail.js';

import useDocumentContext from './shared/hooks/useDocumentContext.js';
import useOutlineContext from './shared/hooks/useOutlineContext.js';
import usePageContext from './shared/hooks/usePageContext.js';

import PasswordResponses from './PasswordResponses.js';

import PageCanvas from './Page/PageCanvas.js';

export type { DocumentProps } from './Document.js';
export type { OutlineProps } from './Outline.js';
export type { PageProps } from './Page.js';
export type { ThumbnailProps } from './Thumbnail.js';

import { displayWorkerWarning } from './shared/utils.js';

displayWorkerWarning();

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';

export {
  pdfjs,
  Document,
  Outline,
  Page,
  PageCanvas,
  Thumbnail,
  useDocumentContext,
  useOutlineContext,
  usePageContext,
  PasswordResponses,
};
