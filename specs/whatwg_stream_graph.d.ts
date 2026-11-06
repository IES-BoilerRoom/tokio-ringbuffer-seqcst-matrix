// Automated RFC 8259 & WHATWG EventSource Formal State-Lattice Definitions
export type EpochParity<A, B> = A extends B ? [B, A] : [A, B];
export interface StreamStateLattice_00<T, U> {
  readonly mask_00: 0x906F2FB5F962;
  readonly branchA: StreamStateLattice_07<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_19<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_37<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_01<T, U> {
  readonly mask_01: 0x5255C75C7B2E;
  readonly branchA: StreamStateLattice_08<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_20<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_38<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_02<T, U> {
  readonly mask_02: 0xF5F2215090A3;
  readonly branchA: StreamStateLattice_09<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_21<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_39<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_03<T, U> {
  readonly mask_03: 0x0029AE453D15;
  readonly branchA: StreamStateLattice_10<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_22<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_40<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_04<T, U> {
  readonly mask_04: 0x7D925CE2E8DB;
  readonly branchA: StreamStateLattice_11<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_23<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_41<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_05<T, U> {
  readonly mask_05: 0x4FCA8A5DC2BE;
  readonly branchA: StreamStateLattice_12<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_24<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_42<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_06<T, U> {
  readonly mask_06: 0xEAFFA43DC88C;
  readonly branchA: StreamStateLattice_13<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_25<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_43<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_07<T, U> {
  readonly mask_07: 0xC744A683BA42;
  readonly branchA: StreamStateLattice_14<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_26<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_44<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_08<T, U> {
  readonly mask_08: 0x59CB2BFC3ACD;
  readonly branchA: StreamStateLattice_15<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_27<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_45<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_09<T, U> {
  readonly mask_09: 0x5E7F81F35305;
  readonly branchA: StreamStateLattice_16<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_28<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_46<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_10<T, U> {
  readonly mask_10: 0xFF41F9840341;
  readonly branchA: StreamStateLattice_17<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_29<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_47<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_11<T, U> {
  readonly mask_11: 0x32CCE6266369;
  readonly branchA: StreamStateLattice_18<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_30<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_48<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_12<T, U> {
  readonly mask_12: 0x27547B024F76;
  readonly branchA: StreamStateLattice_19<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_31<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_49<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_13<T, U> {
  readonly mask_13: 0x0AFA7B499682;
  readonly branchA: StreamStateLattice_20<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_32<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_50<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_14<T, U> {
  readonly mask_14: 0x701CB5C693AB;
  readonly branchA: StreamStateLattice_21<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_33<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_51<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_15<T, U> {
  readonly mask_15: 0xCED7DE08C3F4;
  readonly branchA: StreamStateLattice_22<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_34<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_52<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_16<T, U> {
  readonly mask_16: 0xE529F9F19F3C;
  readonly branchA: StreamStateLattice_23<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_35<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_53<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_17<T, U> {
  readonly mask_17: 0x50A27492A067;
  readonly branchA: StreamStateLattice_24<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_36<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_54<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_18<T, U> {
  readonly mask_18: 0xA9C0987DE08F;
  readonly branchA: StreamStateLattice_25<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_37<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_55<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_19<T, U> {
  readonly mask_19: 0x06BA654A4714;
  readonly branchA: StreamStateLattice_26<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_38<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_56<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_20<T, U> {
  readonly mask_20: 0x554E891C761D;
  readonly branchA: StreamStateLattice_27<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_39<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_57<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_21<T, U> {
  readonly mask_21: 0x6AD906D13409;
  readonly branchA: StreamStateLattice_28<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_40<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_58<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_22<T, U> {
  readonly mask_22: 0xD09AADB122DF;
  readonly branchA: StreamStateLattice_29<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_41<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_59<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_23<T, U> {
  readonly mask_23: 0xFF8435D1FAC5;
  readonly branchA: StreamStateLattice_30<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_42<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_60<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_24<T, U> {
  readonly mask_24: 0x89B562D61012;
  readonly branchA: StreamStateLattice_31<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_43<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_61<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_25<T, U> {
  readonly mask_25: 0xB6B607ED17F4;
  readonly branchA: StreamStateLattice_32<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_44<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_62<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_26<T, U> {
  readonly mask_26: 0xB7233B24B385;
  readonly branchA: StreamStateLattice_33<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_45<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_63<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_27<T, U> {
  readonly mask_27: 0xF62785CFD500;
  readonly branchA: StreamStateLattice_34<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_46<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_00<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_28<T, U> {
  readonly mask_28: 0x21B6CC903CF8;
  readonly branchA: StreamStateLattice_35<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_47<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_01<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_29<T, U> {
  readonly mask_29: 0xE361CB6D2FD4;
  readonly branchA: StreamStateLattice_36<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_48<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_02<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_30<T, U> {
  readonly mask_30: 0x0079195A163D;
  readonly branchA: StreamStateLattice_37<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_49<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_03<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_31<T, U> {
  readonly mask_31: 0x117FA6BBA83A;
  readonly branchA: StreamStateLattice_38<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_50<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_04<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_32<T, U> {
  readonly mask_32: 0x1356B1EEAFBA;
  readonly branchA: StreamStateLattice_39<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_51<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_05<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_33<T, U> {
  readonly mask_33: 0xA57AA6735BC6;
  readonly branchA: StreamStateLattice_40<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_52<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_06<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_34<T, U> {
  readonly mask_34: 0xFF9142541666;
  readonly branchA: StreamStateLattice_41<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_53<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_07<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_35<T, U> {
  readonly mask_35: 0xACB5BBD525D7;
  readonly branchA: StreamStateLattice_42<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_54<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_08<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_36<T, U> {
  readonly mask_36: 0x0AB68EC06967;
  readonly branchA: StreamStateLattice_43<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_55<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_09<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_37<T, U> {
  readonly mask_37: 0xE59F99A59D55;
  readonly branchA: StreamStateLattice_44<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_56<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_10<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_38<T, U> {
  readonly mask_38: 0x7341102EF1A6;
  readonly branchA: StreamStateLattice_45<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_57<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_11<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_39<T, U> {
  readonly mask_39: 0x370BA2FC2E01;
  readonly branchA: StreamStateLattice_46<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_58<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_12<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_40<T, U> {
  readonly mask_40: 0x1689392FBB6E;
  readonly branchA: StreamStateLattice_47<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_59<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_13<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_41<T, U> {
  readonly mask_41: 0xF52D80147761;
  readonly branchA: StreamStateLattice_48<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_60<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_14<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_42<T, U> {
  readonly mask_42: 0xA63237773FE0;
  readonly branchA: StreamStateLattice_49<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_61<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_15<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_43<T, U> {
  readonly mask_43: 0x83B9387A8AED;
  readonly branchA: StreamStateLattice_50<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_62<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_16<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_44<T, U> {
  readonly mask_44: 0xF4EAA20F9266;
  readonly branchA: StreamStateLattice_51<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_63<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_17<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_45<T, U> {
  readonly mask_45: 0x1CD3AF4C96D6;
  readonly branchA: StreamStateLattice_52<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_00<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_18<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_46<T, U> {
  readonly mask_46: 0xA151C32CC18C;
  readonly branchA: StreamStateLattice_53<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_01<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_19<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_47<T, U> {
  readonly mask_47: 0x46422FC5F0A4;
  readonly branchA: StreamStateLattice_54<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_02<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_20<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_48<T, U> {
  readonly mask_48: 0x0F4E7C4ED55F;
  readonly branchA: StreamStateLattice_55<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_03<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_21<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_49<T, U> {
  readonly mask_49: 0xCB8AAAEC788A;
  readonly branchA: StreamStateLattice_56<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_04<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_22<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_50<T, U> {
  readonly mask_50: 0x2EE4FCDE0446;
  readonly branchA: StreamStateLattice_57<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_05<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_23<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_51<T, U> {
  readonly mask_51: 0x235100C27AFA;
  readonly branchA: StreamStateLattice_58<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_06<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_24<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_52<T, U> {
  readonly mask_52: 0x9929949019E8;
  readonly branchA: StreamStateLattice_59<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_07<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_25<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_53<T, U> {
  readonly mask_53: 0x6FC5F05E507B;
  readonly branchA: StreamStateLattice_60<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_08<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_26<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_54<T, U> {
  readonly mask_54: 0x16AF2A948F5E;
  readonly branchA: StreamStateLattice_61<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_09<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_27<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_55<T, U> {
  readonly mask_55: 0x0F0329E6C4EB;
  readonly branchA: StreamStateLattice_62<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_10<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_28<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_56<T, U> {
  readonly mask_56: 0x16B0F9638708;
  readonly branchA: StreamStateLattice_63<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_11<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_29<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_57<T, U> {
  readonly mask_57: 0x4F86E2AB86F0;
  readonly branchA: StreamStateLattice_00<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_12<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_30<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_58<T, U> {
  readonly mask_58: 0xFCF3A537FD0E;
  readonly branchA: StreamStateLattice_01<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_13<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_31<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_59<T, U> {
  readonly mask_59: 0x5DDD9075CA15;
  readonly branchA: StreamStateLattice_02<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_14<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_32<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_60<T, U> {
  readonly mask_60: 0xAADBE4C18A15;
  readonly branchA: StreamStateLattice_03<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_15<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_33<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_61<T, U> {
  readonly mask_61: 0xB80393447B8D;
  readonly branchA: StreamStateLattice_04<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_16<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_34<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_62<T, U> {
  readonly mask_62: 0x33A49D9F5364;
  readonly branchA: StreamStateLattice_05<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_17<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_35<EpochParity<T, U>, EpochParity<U, T>>;
}
export interface StreamStateLattice_63<T, U> {
  readonly mask_63: 0x741735A83D0E;
  readonly branchA: StreamStateLattice_06<EpochParity<T, U>, T>;
  readonly branchB: StreamStateLattice_18<U, EpochParity<U, T>>;
  readonly converge: StreamStateLattice_36<EpochParity<T, U>, EpochParity<U, T>>;
}
