const exampleInput = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw"
  ];
  
const SCORES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
const realInput = ["pqgZZSZgcZJqpzBbqTbbLjBDBLhB","wHptFFsHttHFLMDQDFTbbj","fVfvsstwPHwNwfNGfHWRSnlpClcJzCWCzddSrddg","bdgHbZJHgMHgJgJctDtVssVcpFtq","rNNQqBSzTcBPTDsP","GWNNrhGnNnWNzRfnRQRbhCdqHMbdmbZddbmCmd","BSBDzrSwrqccDDwbfcBjsRwggClslTRWGWGMFlsF","dnhVhLJtzNZdgCRlsTGWCRJG","ZHZdNzptLNtPhPdnprPbbDBrSqrSQPjbqD","rlSwlrGvwTTSwSggCJGQJdhVgJGQ","jcrHrMWfNHNzQgVH","WbfjmBMrBrrmLtqMbwwsPTvPpwvBPFPsws","NRNcHzbzbMRcNPjPrrlBPlbtBl","CZwVCCpWggqprwtlHlssHtPr","WpmLghCVCqCnmVTLnccRQvvQQHDhNQzzzc","NvGTmNGDJsrCmCWPHpCP","nqfVfnFQnZQfFqzMZBPtppcBPPCBptcrbF","fhRSSVfqMZZhMnQfjVzShNNlLvldsNDdvvljGpllDT","JGRNWRGJbGmCGRbLmGpqShhcQpQgCcncScSQ","FFdtjvvpvVFnQhhnQhgf","ltvjjtjHlzBtWRmNPLZRHLpH","FFCJFsvgLsjLgWzJFWJgGwBDbwnbwlDddqffnjnlnd","pTpTMQpMZHQhZQpHPZMmTMlwhDNNddbnDqdDwwlbVNVd","SHpmrHPZHQpmvFrqsFvgCsRq","TtWpWhQlVZrVptJhtrtdbLPDPbjFbCCWCvFFbLSN","zMGlnlsgSSvjjGSF","msznlgcwMnRwznmBqTZQJrddhfQJtBJtZQ","mwTwLftmqqSHWfCfLHjWftBthNNNVrlcFRVNrNrRTrMgrRNg","pvJPJQPGPPzbpVpVlMBVchFl","bzQPQbQQdsDZPDGJnBGnPGnjHDttqqqqmCjftLCmWmfftC","ZNpfdHcccTfdwfMFNjBttMgMbBnvlvjBmB","QVPsGzhbszRLRrgvtgjWgljlRtgt","VJrVLsSrzLzGPChVGzbrrfpTSHFfDDHSdpZFfHpDTZ","NPpvDbmbsmdbNvQvDdWQpmWSnnQCLBnCcQSCnnLlwCBlZz","jggrtGTFhtGfjhDVjrjgMftFwnZcwwBCnzzVwBBwSZcVwLSw","JfHftHhgftgFJWPdPDWRPDvPJv","ZSLLZJGglDSVNDGGGgGgngGmHrfLzmHvvjfjwLhHvLfHHr","QqFWszFMTQFdFPMqBmWBHvfhCwCjhHff","pTsdppTMPtqqdbnlNVzJVbSSnbZR","gBqDccrrJDwmpTWHHTdWMPWWZFHF","RNfnfSwRjlLSWjQMHWvQZtvH","GRLbnzNnzVRLCqhwzwBmJrmc","CcGnZGnGlRncsspmFmmcmGRJJzCDTzjLBSDfqjwDDzDLDB","hHrNdPWhrbPdhPgVWvvrgWdfwjfNzSqfqjLqzfBTzJzJTz","HHQhhvMWbbdRswmlsmwsQc","rrwhpZPrccRpQdcFDJNqhtqtqMLhqfMh","lTtTllgbzTlJsmDMvbLbsf","VVWBTgzlzgGnngrtQRQRtCtwZRQB","HGnGvVdLhlFcmvPWmT","jwBLqZgjrtjqmFsQTscPQs","ZBNZtwLwztLpMrfZBLMdbdnfSRVVfnGbnfDVGh","LmBBBzQrBgBhmmggmtdVdhJNMHNdhsHNDd","ScSZbRplCcMnSpvCfCCZcpPwtJPNtHPHNVVNtPddwlNH","CpvpZGfnffSpnvRSSbcfScQBWrMWmjrmFFBzTGQWjMmL","sljSjSgsjcCLllsjVgSjCtspQwvNNhdFwFQvwpbtmhwhpN","hDqqWzGRHHfRrJnrWrfWfHBdFmBFmBbdBGBpwmFdFpww","TDnDHZrWWHhTjPClClSP","wGNQGQDGjqqmwHHs","MWvvrzgfsdWsvMrSdqJqcpgHgnqLFLnjpH","fvsPMsPdrTZhChNDhbhPVN","sbMgDDtttVvpMtcJsgcGGBBfGLBSLclQTGPS","CWHWzhhRRHjqRmSGPfBSzJfSBnBB","HjjRHWFWhRRwHNmCCRHhhFdNDNrdptMstJvsbMDtVptd","RnSwRsLsnSswjDDDBJPrJv","cpzCzlczHTJVQhvBQlDVDj","WmGzqTmHSsffqqnJ","vQSPHMwpmpQMLGfTPVLRPRVP","hsWhnncsJqbGjGfcfBMMRR","sqdNWqqghbsJslgsJqgWllMWDppSvNCHQHDSSHrHrHCSvvCQ","ZWWnWMmmndQZmffcdZcmssQqrsptVwwTtQHTCTHH","SvvrPzvvFDzGzTszpGGwHT","vrRLjjrPhLjrjPDSfdcMZnmdcmJcfcRf","HpqWhDJjzmcTSbmMBVBb","nCzfLtFnZZrcbcVVfTBfsc","FtRFzgrRtnRzrFwzDjljpjgHNJDlNlhN","gtNRRSSrRmjshHmm","PQDMwPwMppcQQcvCFlhLhGmjflctlnHGjf","QwDMFFdtwFDQJZZZNqSqJSqBgBqTNJNg","cddzbbzQflTDcDfRbcfbJVsplVsChNghHNsSsVpn","FBWFWjFFCjWPBSPPJsVpppPSVH","CrCwvjWvmqmvrBvFwZRGQQDDcGTcfbddZdRc","ZBQqdGLFmmzDmTZz","PvrVMvGgWmwSmllglS","NrfGnvWWPhfpspsGvLJBsFBbqJCbdQcLBq","DrwTrlfGThhQTpDdWSWgdgwLLgBSZH","bqbPRVRmzJCLWSgCzCLH","jRtbNVtNjNqRqsJtbjbMDQHQGlchfQpfsTcHpGHr","tMnRcnpDcZtpQDSCCsGGHvcGPGqGsr","mzJmjWJNlbfmbhzVCCPmZrCZqPGCgZ","JWhzjJBdWnMLZtSBTw","tvdLttzvtHLztnQpssdTPbMqbqMTdTss","jhSRGNjjSjhSDCNhRgRgclNjmfZTPnbTMqJJfqqsbMflTfMs","WnCjcjDRCChSNSCNDjNhGVDtQvVLHzFrpFwFrHFQQwQpzp","fLbLLLLQhVPhBVmDwmCfwsdwwDps","GNtctFTSrrJqGGpHFcTJFTwsslwmlmWsdsqRRCmqwdWs","ppctFTTSgHcSrGrrTGFcrrnhhQbPLbQZgzLvQQVVvZvLhv","mBBWnnBbBCtssmRThRDllR","wfwFQcpHFpddFrwpGcHSHdcjQZZlqqDTTjZqssRhWllssj","dWfrcSGFpgrSzFgMbCPNPLtCtVMV","llLlGLJJMjJMGVSvVMSLRRHvjCZtgZccttnmbCtdCcmCCztn","sBQNqPhsrrqrrwrsppsHswsZcmnNCzdZtbgntcNgcctnCt","WWFBBsPwpWPwBBHpFFrWGRMRLlJfJVMJRJLWSJ","vgMvQnPMntnSQPSgMvSMpNJfJDNNRpfZmGQmbDND","HlbjHHBLjCHGZGpfJLpfwm","qdHWqBbbbjrTzdqFqssvtPMSSFFg","TGDfDHSgtTzPPbnCtnNtVn","WQrWMFpMWMQbCVNPRWVWWv","pdpMMrhrprQshlMFjZpdjZMgmlGJJGlGDBmgmHgmJCSBHG","zWWBjZZjWPFFPPnBCVdsqmnCdSLn","rJvpbvbpGgTGrNJGGpRRhsCqSsLhnsmTVnSLTLHh","gNNNJDbpvGNfvNSDPPWQWWPZZWtjlQfc","RRVbWWWvvZVWmsFSsDNbHsDSsg","CrTwJQJpJpCCwvlJQTTPsfzDgfwNhszfszFhzFDh","ttQJtvjpPvcqTllJTPtPRGMGRGLWdVZLVZjWdMjj","NnPCTQWMMQNNNWwWnMzpHczzsZcCscddHdGs","mqRgqqVlLgqmfVzcGpzzSHGZcgcz","tjmZjZmhqftlJRJhlTMPTPQbrPBBWnhnnT","hvTQqpvTqjvhpjnCqmCnSDSFDWFFLSSSWDnSVL","tZwGgsfPcltgcZltRgNSDSSSSldmWMLWFVHd","GrZtwRPbGwwPcGRsZGtRtgQJJhCjpzmTBTvJzJrjvzQp","rwmwqDWwfDtztnFGBB","LPdpdVcdPGvPVgZsPtlhTTtthHBhHF","dRdCjvpCRpjvCMZgvLgRVJJSWMqmbwQJbMWGWQNbbQ","CMCcMcDGzBGPmBmznTNbnGbrswNTwTvN","SSHVWZphqWWJJzNsbnFwFVNjbz","flLQqHzzgtQdcDRB","mdzvFtllBgFttGnvfMwMVRRZCThSNZVhMd","pDTrDHjWWJPqjDjDSMqNwSZRZhNSRNCZ","jpcTpQPWLLpDTLcTrPjPDcjzzFLFzvgLzlzfvGFgfmgFzF","fQVVPzBpFVVrtrsJ","PldSLNSmWwMCcCMMcCNN","mSPlldllmPdRnLRwmbnLwmwvTjBTghTHQjfgjpZHpfHHfZbZ","pmfMcfprMqMrZZJcMZMGWTsFCVCTVPPsVTWCGPDP","vrvvvLRbBNNBbvBbjBHbQhgDslPTWsPTlFDsFTFwTWlDVQ","hgjznNBjHHgrhRHgrRLRnRfSSJmdqMfffzqJptdmmmdd","nRnPlCRPWPMFqwPLwq","tBGfbSbHtBVQgrbrqfTFFLvTNLLNGTGMLdws","bgHVtBDtqnqqlJRD","SdSJrHssFBSVsNtMMdRWnTRhRl","vcvfDvgvcwvFRlbnwWRlMhtn","DDDqcqFZQPgcgcfvDjLDfVrsSVrHBLJVpLpCSppGpS","gJGTFLTdrpLdBcWBvnllvlMvMC","RRqbbQhwNZZwQRPrSZWnvHSZWSvSZC","fQDNRsrsQzfbDrbsqwdtpgJVjdJdpVfJFLFF","DzWqFvqpqFSCSzGRGmwfntGjmR","cbhZNJQBtgMHJbJcNcrmfhrRrswmfRwnVrhG","bJNgbNdJBBPMHbcMNMWWvSFpDLFvCStqpLdv","sLsHTsTbRLRwqssHwHjFrPDwJDppzFDJmmcrPJ","BnZGBlMZnQSgSnvVSMmJzPDCzFcrLPPJmpDG","BgBffVLhQLgvnBRRssfqdfHbHdNT","HRPVmjqBqVjVRRPmcPmJjbDgLDDshbfRLlfbfLbhlL","rtTzSMSMFpTzfgDzzgsLfLHZ","rNpGpSSHwMTrrdHGNtTPmVjnGGjVjmBGmmBjJB","DBqDQDQHSFlHsFnN","MfLfwwLMWGLrWMMnpSlsnGJJlbFVjV","gRhMZzhrFLWQvTPqTPcvvh","NwwsHwtnFCtzcPdbvrQbBqclQq","VmZLLTLfVpwMBrVVqqMM","mgJDjTgWgLWDppJZJTWZmSRzCtRHhGGwHNzshGFFCSRt","RGCCDRdFZdRCMzzGCDGCmGHMfqbNNNLQLfFqnnqnNQqVPnQn","glgcrwrJjJccBwdSfnSnVqrqQVVnNq","jvtBsjstgstjltBcWzTGGddHTWDTZCmDGm","HJHGZZHnctSSDhZtmZ","MjjQFSvQlRjSdRqdqvVSqCCPtpRpPPDfDmfPbbpphC","SNsWqMNvFFqdqVMgwwBHrGHnHgcWTJ","jBcbjSmSBbbCcPcMjmbzFPhDMDfrfGRhGQRMnGQfdrDh","wHlqwlqpwZqcwVlqHtJVJLTdhndTDnhffftTGDTTDdTG","JNllcwpZZlpZJjNzSzSCNjSmFN","FhwRPzmPWmQQmwFPGGMGGRPnRHHVfDbvJlvDlHSvDTDfVHbD","NpjcpCdqpZZvwvJVfDdDHT","twZtqrBrBQBMBPGn","fBFGjbLLFblmbWFmVfBvrvMdMdncnrdNbdQNTr","shZHHRZhtsqJZhHhgZzgJzVJrrSSvrMdMQrNTvMNJQNrdn","szHwgtHtwPzPLpVFpVPLlfLC","mrsrtrWjljjjvwwgNnZfDHJDqTqrHL","FccMPFQcpczpdMPhMqJngNfqfnFgDnnFfg","BdMpdcDPcpjBmlBmVWts","VvwTTlfVlblwwSsbfTdzVqjhzVjpjjqjqpzV","rwCWFGmJrNCmMRHmwRFPmHQQhBLBzdLqBjhLBHZdQB","rFwDrMNRJDJFPRmCvcTcbDsvstTgfTsg","zhRzdRRChHCFGPDRvWRWvWvHpZpscrrmrZrJcmspJmJZFfpM","wQqLtQLtnjbjVnVjbBgjbBnbMZMZJlVpZfJprsMprmGZZZml","jQjjNBLLwjtQBtwwdGGDCHhNzzWDzTPD","DzzQnCMMznFnCdnFFlHtlmhVRtmVVmVhSF","PWrPPRTfLJJtfbtBfV","wsrggZsTwTTWGvDppQMRjjMCjMZp","fTjzZVTlbffCMvjgMpSFWBNBWSFsvBsNNccF","nJdwdPRQqGqbGJQbmmQQhRSBBBSsPPHWNSWFBtDNBsHH","nnQhwwQGdLqqwnZbpfjMfzpzLbLj","jgTgCwgjMgGLhvRrHrHwhvhV","bqSsSsZFZBlFsBlTSppVvVvnVHHvHnhp","qFlbPbFFsWFsBlFWbsbsmzTcMjLmtfcCmcWtgzgm","rrHbfBLbfMcghcmrcCzg","RDStDtvdZRQdJSQWWWdvFSgNvVcnghhmnnzhVPhczPch","ZtJpJttSZStwtttFDQmLGTlqMLqGfwTTGLfTGG","MrfLWwfBwgghvLmNvmHHHGGQHQSSscscVvTV","dDjZjDPJtFRzjdTTsqVjTpqHsGrT","JbFtlbPRJCzffBrgnlMWmg","ZFsbbVLLdZppLFpcJjCCQJlGcQCMZq","TwRtRBdBClCTGlcJ","rwBvBzDvwNNDHLHzfHssdHhS","gdhgftTNGTbpqJqjjgRJ","lcBcMLFzMzLFMzFzPjRBQjQPQpSqhpbp","mzzmZHZZnZwLhtGfddVsNCCnGG","lblbPGSGrTLRwqZLvP","FffCCFzFCWzzvmjRJnRTnZZNJCTqCR","gdhztVjhHMsGvrGVVB","ZJZjJGHZhDJRFJHjDZjhPNFgFmrnVmgVVzVBscnzSg","bwlWtMwtbqdCvlQCplmsqgnVVScnVgmnmzNs","WMWltTtvvCdwCCRPPfTHGcJDfGZL","svqQJLvSSZrZZZCFCBDPDCMTDpPwMWDPCwRw","GnlnGbdldjhzzhpPDTWjmtMwPmWW","HzVbGnnbchblbnbzcQTZBZrQrFSHvLBBJv","MmgMmVpcRDlvbvpHJF","GSGTLTwhwwhzQqTqwjFlbdvdbrlrbrrDnDvHlQ","zLNNNtwGFCMsWsCWNR","tSTDDDftSqSsTDnTtCWNrbFsNJJvbzJbvJ","dhRdVHdMGRgPJbjNPbzgvr","VllQmQdhRHLhhHmLlGzSqSQDDcDBnnBnqDfSct","zBzJWZBLZNNGLsbTvLbmbT","QdtQwfdnPdPTbsRQGhRvbl","pgtPgPjVDnpVnDtPTFFrJJTBCcpcrpCW","GnWMfBfdCGMbjRNpnzvvNLRNVv","FShJDJJscwwszNjvNjNNqZ","tJmccwlcFlFcHlPcHFfdrbBGBGfjCGTfBCPf","GhlcQsZNQZWhpcGhwlPmqnnqnjJjLRnqzJsJLJ","VTMtTtDTbvbMTfvdJqngjmqzdjmJjCLm","vHtbHTDBFvffBPGwLLZBQNNl","bDphJrpbpnBbDrdBvJdDFBMtMlfgtsFSstfGPPgggPGP","RZmNjTZQNVHQHNGSgMsfPlShSs","VmchTLZQLjVLjmTVmQVhTmwVrWJqbDqddBrpnWbvnqrqcnJB","jWWgThWtgSvSSWlJtlShllPcHVnJHPbMHPcPVPbVZrHM","fGdfRsRdNwfRQhnpcZdVhVpbPh","fGhwNBqNjqStFqtj","TSTBrSDlQlTDrrQclrBSLffPvcfcdVjVMGGPLjLL","qnbnbngFGhhhPfjjVffjff","RRWbmgpnmqlrCwwSrwmG","mZZTsdBZVZBZLVHdFmsNnCrCVQQbWvWjWNCnbg","QSffDGwGGrPGWrgN","hflwzltflDpMpDSllcMDhSShdsdZQdLZZdHTssZzmqLzFmLB","LLRJRshLfsJfWnLBTlTBlFzNrnrBBl","qmmVwmdHqmqGHZdHbbqSScdZQTjjpTFFVBBrlDrzDFBTjFjF","wZZwmcbvHgqTmGccmvdCLhCPJsJCPWgMLPtJsJ","TWbbbNbJJjJbqTjtJJjTQCtnGSBndMGCcSZSQwCB","mcfRfrcmrDRrPsdQSGZQGnsSQMnB","DDRLDRDFPpgmpcgPghpfgvRTjbhTVjHljJjzlVzVTlbHll","rPlPrPllBGgJgdJfHgfjJt","pppZVfFDWssMfFVVFMpsMMVmHCRLdcZCRtvLRdCtCJdHRttH","mDMfDFDmnMMmsMFznDFpzswbNbPGwwSGBrGrhrTzThSl","qDNFfCCNWLfWWhqhDGPMMZVwgpCpMbJwJCvV","RdstRRvdtmtPVpppVbVtrp","zzncSRdsTdQTczQBsLvvHNhDWGjDHNLDSG","bNNpcfJcCtNpHFsJsGGjLGzmLjLmGzlFGW","qwqZdnQnQwnhhzmnMWjmNlMzLr","qhwwQSwStJbHNftS","WlfWSwDftzRltBWVlRDlsmBJPcsZPmcJnmPmFhrn","dLQbQbvGTddTvbjQCbLbhmCrZZPPsshPPPrJZrnF","QgFjQHHbMvdRMVllSqfSlf","MDPJBWWPggVlPVDMSljdZNNpwjwbHZpNbDdH","mGmzcThGrtntHhthzGctRbNRNwRNzZwfdZpjpdRj","ThtcvvtThFcnqFQSHgBSVJll","hVqhFLBngHVFtJjtLCBJVSbbPNNbSmfLLTSNSrrLTb","vsdZZpvQdczlMdMvzlcvvdQprbGGTfSbWmzPTgmmGTbmmfGP","vgRZZMgwdgsQZdMBqVhjhJqBhJtRhq","bgFQbMMbTbQhghddFTFGnmSmsNdzHvzSSzlcHsls","fZDjVtfZLqwpqtCfCjCjlvqScrvzqHSzszzSnczr","jpftjCfWCjCfCRZZlpCpjRWQBRTQQbgBBTMbghgbbPGJBJ","VZZrbBVwbbbVVvgbntnggNRJqRRNNccMcNqJcJ","jfDPfDdGGhDGfGFPCcZQqMpRNJhqTcMc","LPfffPHGPDjPFGWSdHPFjWtlBlwvlwBlbtmLltsmvtZb","TTfJDfrJTSrHMcVMJDTfMcMDBQBPwnPlznPszFVBFgzFgnsn","CqtmWNNGBPzwbbwm","htdCthhWGtWWGNZqcZpJjwwHHHMcHZDM","VvjQjQCZLbbSbTPpSHtFzsHzppMfzz","DJrJWBcDcWJWmmcgGRGRGWGDzHHwzdfRHpMztMpfdFdFdzdM","DmBgGDqJNhGcccWmcZLjTPLVLTQhPtvvTZ","qfhvwNDQqwDGdGZZGwPTTw","STsJgsRtJMZPjlsmdpbs","SCTTHTWHNVfHQqqq","djCDgllgjJjDRRNgRlDdBgtpQHfhQTrLLrGBtzrQhpBH","SVcsMGcPSbqSPmLTPHHQTHrftPTr","VcWnsScqSScWcZbMMcSVGbNNlgDRlgCCNgwWvvRJdNdj","mgPllfRgvNmPGQGGsmQNWlpFtnBPFShncTFShtFShnjS","tLLzMJJwwbbdrrMLqLVJMzVZFnpTTFpnCSSpShCjBJhpThph","HMdVwbbLMbDMDVlmDsgtNtNRfgsm","hNsgsgzNZRghPhZBdssPQfzDmQSmmzQGJWzfCDJJ","bblVHvvHHTljwFCfGrvmfmmJBmGQ","THMMFVwqTPRdZptMBP","QvcPGSvQLjmcQWSGWWGjLCNhhqpCdBCNCbJNdVWpCh","rwtLlzZggLHnHlwHRDdVqBbCdqqVVhbqVnVh","zRDzwRrwlRlRTgrDtllmQGLcPjGLccFmTcGSQc","RWlgQlbcWBwzsJggTfhh","GrnLjHLjmLjjGSLjSDmfJJpfThhfSWJPqJqhwz","vLvDDnDNrCVjCmNDbFlBVZdVRQlRbWcb","mTlwFngwmlLlvsmLHmHsLJhJFfcbdpbNcjCNCbpccb","tZRzBRzBBRQzPqGRqrVQtjjfbCMcfMfCMMjVjfCJNd","SDBBPtZZTdnnwSvg","nddNNMMPNBnBNnBTQSShlSHghlDHBr","VcccVmqJsJsjlTmzTDggmHHT","VqLtFCqFJfVtVjsNgPNNMMWNwgtNvn"];

// Puzzle 1


const seperateStringInTwo = (str) => {
    const strLength = str.length;
    return [str.substring(0, strLength/2), str.substring(strLength/2, strLength) ];
   };
  
  const findCommonLetter = (strings) => {
    let commonLetter;
    strings[0].split("").forEach(s0letter => {
     const guessCommonLetter = strings[1].split("").find(s1letter => s1letter === s0letter);
     if (!!guessCommonLetter) {
        commonLetter = guessCommonLetter;
     }
     
    });
  return commonLetter;
  };
  
  const computeIndexScore = (letter) => {
    return SCORES.indexOf(letter) +1;
  };
  
  console.log(seperateStringInTwo(exampleInput[0]));
    console.log(findCommonLetter(seperateStringInTwo(exampleInput[0])));
  
  console.log(computeIndexScore(findCommonLetter(seperateStringInTwo(exampleInput[0]))));
  
  const computeTotalScore = (input) => {
    return input.reduce((totalScore, currentRucksack) => {
      return totalScore += computeIndexScore(findCommonLetter(seperateStringInTwo(currentRucksack)));
    }, 0);
    };

// Results puzzle 1
console.log("Part 1 example input: ", computeTotalScore(exampleInput));
console.log("Part 1 real input: ", computeTotalScore(realInput));



// Puzzle 2
const findCommonLetterP2 = (strings) => {
  let commonLetter;
  strings[0].split("").forEach(s0letter => {
   const guessCommonLetter = strings[1].split("").find(s1letter => s1letter === s0letter &&
    !!strings[2].split("").find(s2letter => s2letter === s0letter)
    );
   if (!!guessCommonLetter) {
      commonLetter = guessCommonLetter;
   }
   
  });
return commonLetter;
};

const computeTotalScoreP2 = (input) => {
  let totalScore = 0;
  for(let i = 0; i <= input.length - 3; i=i+3) {
    totalScore += computeIndexScore(findCommonLetterP2([input[i], input[i+1], input[i+2]]));
  }
  return totalScore;
  };



// Results puzzle 2
console.log("Part 2 example input: ", computeTotalScoreP2(exampleInput));
console.log("Part 2 real input: ", computeTotalScoreP2(realInput));


